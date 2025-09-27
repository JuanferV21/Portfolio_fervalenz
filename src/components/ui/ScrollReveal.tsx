'use client';

import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: keyof typeof scrollAnimations;
  delay?: number;
  className?: string;
  threshold?: number;
  margin?: string;
  as?: string;
}

export default function ScrollReveal({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  margin = '0px 0px -100px 0px',
  as = 'div'
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    margin,
    triggerOnce: true
  });

  const shouldReduceMotion = useReducedMotion();
  const animationVariant = scrollAnimations[animation];

  // If user prefers reduced motion, skip animations
  if (shouldReduceMotion) {
    return React.createElement(
      as,
      { ref, className, 'data-scroll-animation': true },
      children
    );
  }

  // Use motion.div by default
  const MotionElement = as === 'div' ? motion.div :
                      as === 'section' ? motion.section :
                      as === 'article' ? motion.article :
                      motion.div;

  return (
    <MotionElement
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariant}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      data-scroll-animation
    >
      {children}
    </MotionElement>
  );
}

// Specialized components for common use cases
export function ScrollFadeIn({ children, delay = 0, className = '' }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <ScrollReveal animation="fadeInUp" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
}

export function ScrollStagger({ children, className = '' }: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className} data-scroll-animation>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollAnimations.staggerContainer}
      transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
      className={className}
      data-scroll-animation
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerChild({ children, className = '', as = 'div' }: {
  children: ReactNode;
  className?: string;
  as?: string;
}) {
  const MotionElement = as === 'div' ? motion.div :
                      as === 'section' ? motion.section :
                      as === 'article' ? motion.article :
                      motion.div;

  return (
    <MotionElement
      variants={scrollAnimations.staggerChild}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionElement>
  );
}

// Hook for custom scroll animations
export function useScrollReveal(animation: keyof typeof scrollAnimations = 'fadeInUp', config = {}) {
  const { ref, isInView } = useScrollAnimation(config);

  return {
    ref,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants: scrollAnimations[animation]
  };
}