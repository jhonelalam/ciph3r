/* eslint-disable tailwindcss/classnames-order */
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS send form failed:', error);
          setSuccess(false);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-white dark:bg-black transition-all duration-300 hover:scale-105">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-lg md:max-w-xl">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Reach out to connect!
        </h2>
        <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 text-xl">
          Start your journey in cybersecurity by learning new skills and exploring essential knowledge to protect yourself and others online.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your name
            </label>
            <input type="text" id="name" name="name" className="input-style" required disabled={isSubmitting} />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input type="email" id="email" name="email" className="input-style" required disabled={isSubmitting} />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input type="text" id="subject" name="subject" className="input-style" required disabled={isSubmitting} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea id="message" name="message" rows={6} className="input-style" required disabled={isSubmitting}></textarea>
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />


          <button type="submit" className="btn-submit" disabled={isSubmitting || success === true}>
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {success === true && <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>}
          {success === false && <p className="text-red-600 text-center mt-4">❌ Failed to send. Please check your details or try again later.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
