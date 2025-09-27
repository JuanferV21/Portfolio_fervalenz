'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationConfig {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (config: ScrollAnimationConfig = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true
  } = config;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce
  });

  return { ref, isInView };
};

// Animation variants for common scroll animations
export const scrollAnimations = {
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0
    }
  },

  fadeInDown: {
    hidden: {
      opacity: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      y: 0
    }
  },

  fadeInLeft: {
    hidden: {
      opacity: 0,
      x: -40
    },
    visible: {
      opacity: 1,
      x: 0
    }
  },

  fadeInRight: {
    hidden: {
      opacity: 0,
      x: 40
    },
    visible: {
      opacity: 1,
      x: 0
    }
  },

  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  },

  staggerContainer: {
    hidden: {},
    visible: {}
  },

  staggerChild: {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  },

  drawLine: {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1
    }
  },

  slideInFromBottom: {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }
};