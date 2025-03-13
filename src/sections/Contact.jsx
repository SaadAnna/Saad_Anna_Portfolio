"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
    
    // In a real application, you would send the form data to your backend
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
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
    <section className="py-20">
     

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
            Let’s Collaborate
          </motion.h1>

        

          <motion.form 
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6 mt-20 border border-white/20 rounded-xl p-5 "
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
                name="email"
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
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-1 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border focus:border-white text-white"
                placeholder="Your message..."
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
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-8 py-3 bg-green-800 text-green-100  mt-10 rounded-lg  text-center"
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          ) : null}
        </motion.div>

      </div>
    </section>
  );
}