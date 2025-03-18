"use client";
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    // rest of your code...
  
    
    try {
      // Make sure form.current exists before proceeding
      if (!form.current) {
        throw new Error('Form reference is not available');
      }
      
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const result = await emailjs.sendForm(
        'service_1tvl1gw',
        'template_orpgouq',
        form.current,
        'ihsMFKjornDQXuhwB'
      );
      
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Email send failed:', err);
      setIsSubmitting(false);
      setErrorMessage('Failed to send message. Please try again later.');
      
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-[70px] md:leading-none font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center"
          >
            Let&apos;s Collaborate
          </motion.h1>

          <motion.form 
            ref={form}
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6 mt-20 border border-white/20 rounded-xl p-5"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="Myname"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-1 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border focus:border-white text-white"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Myemail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-1 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border focus:border-white text-white"
                placeholder="Your Email"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-1 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border focus:border-white text-white"
                placeholder="Your message..."
                rows={4}
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-start text-start"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-950 to-purple-800 text-white font-medium hover:from-purple-950 hover:to-purple-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-70 justify-start"
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </motion.form>
          
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-8 py-3 bg-green-800 text-green-100 mt-10 rounded-lg text-center"
            >
              Thank You For Your Message! I&apos;ll Get Back To You Soon.
            </motion.div>
          )}
          
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-8 py-3 bg-red-800 text-red-100 mt-10 rounded-lg text-center"
            >
              {errorMessage}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
export default Contact;
