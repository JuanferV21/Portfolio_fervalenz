'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        console.error('Form submission error:', result.error || 'Unknown error');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-2xl ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs sm:text-sm font-light text-black mb-2 sm:mb-3 uppercase tracking-widest"
          >
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            autoComplete="name"
            className={`w-full px-3 sm:px-4 py-3 sm:py-4 border-2 bg-white transition-colors duration-200 focus:outline-none text-sm sm:text-base form-field ${
              errors.name
                ? 'border-black bg-gray-50 ring-2 ring-black ring-offset-2'
                : 'border-gray-300 focus:border-black'
            }`}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.div
                className="mt-2 sm:mt-3 border-l-4 border-black bg-gray-50 pl-3 py-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  id="name-error"
                  role="alert"
                  className="text-xs sm:text-sm text-black font-mono uppercase tracking-wide"
                >
                  {errors.name.message}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-light text-black mb-2 sm:mb-3 uppercase tracking-widest"
          >
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            autoComplete="email"
            className={`w-full px-3 sm:px-4 py-3 sm:py-4 border-2 bg-white transition-colors duration-200 focus:outline-none text-sm sm:text-base form-field ${
              errors.email
                ? 'border-black bg-gray-50 ring-2 ring-black ring-offset-2'
                : 'border-gray-300 focus:border-black'
            }`}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.div
                className="mt-2 sm:mt-3 border-l-4 border-black bg-gray-50 pl-3 py-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  id="email-error"
                  role="alert"
                  className="text-xs sm:text-sm text-black font-mono uppercase tracking-wide"
                >
                  {errors.email.message}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs sm:text-sm font-light text-black mb-2 sm:mb-3 uppercase tracking-widest"
          >
            Company / Organization
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            autoComplete="organization"
            className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-300 bg-white transition-colors duration-200 focus:outline-none focus:border-black text-sm sm:text-base form-field"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm font-light text-black mb-2 sm:mb-3 uppercase tracking-widest"
          >
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            placeholder="Tell me about your project, opportunity, or how we might work together..."
            className={`w-full px-3 sm:px-4 py-3 sm:py-4 border-2 bg-white resize-y transition-colors duration-200 focus:outline-none placeholder:text-gray-400 placeholder:font-light text-sm sm:text-base form-field ${
              errors.message
                ? 'border-black bg-gray-50 ring-2 ring-black ring-offset-2'
                : 'border-gray-300 focus:border-black'
            }`}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.div
                className="mt-2 sm:mt-3 border-l-4 border-black bg-gray-50 pl-3 py-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  id="message-error"
                  role="alert"
                  className="text-xs sm:text-sm text-black font-mono uppercase tracking-wide"
                >
                  {errors.message.message}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <div className="pt-4 sm:pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full text-sm sm:text-base py-3 sm:py-4"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin mr-2 sm:mr-3" />
                <span className="uppercase tracking-wide">Sending Message...</span>
              </div>
            ) : (
              <span className="uppercase tracking-wide">Send Message</span>
            )}
          </button>
        </div>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              className="border-2 border-black bg-gray-50 p-4 sm:p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-xs uppercase tracking-widest text-black mb-2">
                Message Sent
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-light">
                Thank you for reaching out! Your message has been sent successfully. I&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div
              className="border-2 border-black bg-gray-100 p-4 sm:p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-xs uppercase tracking-widest text-black mb-2">
                Error
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-light">
                Sorry, there was an error sending your message. Please try again or email me directly at fervalenz0203@gmail.com
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}