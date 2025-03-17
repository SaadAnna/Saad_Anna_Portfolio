"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const IntegrationHub = () => {
  // Define the integrations with their positions and SVG paths from Flowbite
  const integrations = [
    { 
      name: 'Google', 
      angle: 0, 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      ),
      color: 'text-red-500'
    },
    { 
      name: 'Slack', 
      angle: 45, 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      ),
      color: 'text-purple-500'
    },
    { 
      name: 'Drive', 
      angle: 90, 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.5 13.44 7.37 4.27h10.25l5.13 9.17h-10.25z M6.17 16.8 1.04 7.63 6.17 0l5.13 9.17-5.13 7.63z M18.83 16.8 13.7 9.17l5.13-9.17L24 7.63 18.83 16.8z M7.37 19.73l5.13-9.17h10.25L17.62 19.73H7.37z" />
        </svg>
      ),
      color: 'text-green-500'
    },
    { 
      name: 'Microsoft', 
      angle: 135, 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
        </svg>
      ),
      color: 'text-blue-500'
    },
    { 
      name: 'WordPress', 
      angle: 180, 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM2.4 12c0 1.32.244 2.577.685 3.744L8.45 4.697A9.617 9.617 0 0 0 2.4 12zm17.54-1.2h-5.88c.066 1.265-.027 2.548-.333 3.8l-1.3 4.404A9.626 9.626 0 0 0 21.6 12a9.575 9.575 0 0 0-.72-3.6zm-2.833-2.4c.6 0 1.14.113 1.14.113.057.015.08.077.037.135-.043.05-.08.133-.08.133-.057.015-1.14.243-1.14.243s-1.137-.243-1.87-.243c-.688 0-1.767.243-1.767.243s-.697-.243-1.03-.243c-.38 0-1.14.243-1.14.243S10.403 8.8 10.362 8.773c-.042-.03-.05-.12-.013-.15.038-.03.113-.09.113-.09s.542-.12 1.12-.128c.394-.006.768.115 1.128.3l.173.66 2.332 6.27-3.28-9.803c.594-.18 1.23-.27 1.86-.27s1.303.09 1.902.275zm-7.634 0a9.57 9.57 0 0 0-4.27 8.2c0 1.66.427 3.22 1.176 4.578l2.48-6.924c.157-.435.275-.892.35-1.357a5.09 5.09 0 0 0 .085-1.285 6.426 6.426 0 0 1 .18-3.211z" />
        </svg>
      ),
      color: 'text-indigo-500'
    },
    { 
      name: 'Teams', 
      angle: 225, 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.85 3.9v1.5h4.35c.45 0 .75.3.75.75v1.05c0 .45-.3.75-.75.75h-4.35v1.5c0 .45-.3.75-.75.75h-4.2c-.45 0-.75-.3-.75-.75v-1.5H4.8c-.45 0-.75-.3-.75-.75V6.15c0-.45.3-.75.75-.75h4.35V3.9c0-.45.3-.75.75-.75h4.2c.45 0 .75.3.75.75zM0 13.5a2.99 2.99 0 0 1 3-3h18a2.99 2.99 0 0 1 3 3v7.5a2.99 2.99 0 0 1-3 3H3a2.99 2.99 0 0 1-3-3v-7.5zm16.5 3.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" />
        </svg>
      ),
      color: 'text-yellow-500' 
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
  };

  // Calculate position based on angle and radius
  const calculatePosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180);
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    return { x, y };
  };

  // Render the integration icons in a circular pattern
  const renderIntegrationIcons = () => {
    return integrations.map((integration) => {
      const radius = 200; // Radius of the circle
      const position = calculatePosition(integration.angle, radius);
      
      return (
        <motion.div
          key={integration.name}
          className="absolute w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          style={{ 
            left: `calc(50% + ${position.x}px)`, 
            top: `calc(50% + ${position.y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
        >
          <div className={`${integration.color}`}>
            {integration.icon}
          </div>
        </motion.div>
      );
    });
  };

  return (
    <section className='py-20'>
    
    <div className="mx-auto bg-gradient-to-b flex flex-col items-center justify-center py-16">
      <motion.div 
        className="w-full max-w-6xl mx-auto px-4 text-center relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo */}
        <motion.div 
          className="mb-6"
          variants={itemVariants}
        >
       
        
        {/* Integration Hub Visual */}
        <div className="relative w-full h-96 my-12">
        <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[70px] h-[70px] rounded-full border-2 border-blue-100 opacity-30"></div>
            <div className="w-72 h-72 rounded-full border-2 border-blue-100 opacity-50 absolute"></div>
            <div className="w-48 h-48 rounded-full border-2 border-blue-100 opacity-70 absolute"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 absolute flex items-center justify-center">
              <span className="text-white text-2xl">+</span>
            </div>
          </motion.div>
          
          {/* Integration icons */}
          <motion.div 
            className="absolute inset-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {renderIntegrationIcons()}
          </motion.div>
        </div>
      </motion.div>
      <div className="inline-flex items-center">
           
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-[50px] mt-5 md:leading-none font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center max-w-3xl"
          variants={itemVariants}
        >
          Transforming Industry Leaders with Efficient Integration Methods
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="text-white/40 text-center max-w-xl mx-auto mt-5"
          variants={itemVariants}
        >
          We empower top manufacturers to enhance productivity and streamline operations through efficient integrations. By connecting systems and automating workflows.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
        >
        </motion.div>
    </div>
    </section>
  );
};

export default IntegrationHub;