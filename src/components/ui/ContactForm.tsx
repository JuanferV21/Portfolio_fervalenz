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
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Replace this with your actual form submission logic
      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-2xl ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-light text-black mb-3 uppercase tracking-widest"
          >
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            autoComplete="name"
            className={`w-full px-4 py-4 border-2 bg-white transition-colors duration-200 focus:outline-none ${
              errors.name
                ? 'border-black bg-gray-50'
                : 'border-gray-300 focus:border-black'
            }`}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                id="name-error"
                role="alert"
                className="mt-3 text-sm text-black font-light"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-light text-black mb-3 uppercase tracking-widest"
          >
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            autoComplete="email"
            className={`w-full px-4 py-4 border-2 bg-white transition-colors duration-200 focus:outline-none ${
              errors.email
                ? 'border-black bg-gray-50'
                : 'border-gray-300 focus:border-black'
            }`}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                id="email-error"
                role="alert"
                className="mt-3 text-sm text-black font-light"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-light text-black mb-3 uppercase tracking-widest"
          >
            Company / Organization
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            autoComplete="organization"
            className="w-full px-4 py-4 border-2 border-gray-300 bg-white transition-colors duration-200 focus:outline-none focus:border-black"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-light text-black mb-3 uppercase tracking-widest"
          >
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            placeholder="Tell me about your project, opportunity, or how we might work together..."
            className={`w-full px-4 py-4 border-2 bg-white resize-y transition-colors duration-200 focus:outline-none placeholder:text-gray-400 placeholder:font-light ${
              errors.message
                ? 'border-black bg-gray-50'
                : 'border-gray-300 focus:border-black'
            }`}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                id="message-error"
                role="alert"
                className="mt-3 text-sm text-black font-light"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin mr-3" />
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
              className="border-2 border-black bg-gray-50 p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-xs uppercase tracking-widest text-black mb-2">
                Message Sent
              </div>
              <p className="text-sm text-gray-700 font-light">
                Thank you for reaching out! I&apos;ll respond within 24 hours.
              </p>
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div
              className="border-2 border-black bg-gray-100 p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-xs uppercase tracking-widest text-black mb-2">
                Error
              </div>
              <p className="text-sm text-gray-700 font-light">
                Something went wrong. Please email me directly instead.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}