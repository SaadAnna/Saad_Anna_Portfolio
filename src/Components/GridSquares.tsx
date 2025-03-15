"use client";
import React from 'react';

export const GridSquares = () => {
  return (
    <div className="absolute w-full pointer-events-none overflow-hidden z-0" style={{ height: '400px', top: 0 }}>
      {/* Grid background with squares - only at the top */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.2
        }}
      />
      
      {/* Square dots at grid intersections */}
      <div className="absolute inset-0 w-full h-full">
        {Array.from({ length: 7 }).map((_, rowIndex) => (
          Array.from({ length: 30 }).map((_, colIndex) => {
            // Random opacity for some dots to create varied effect
            const opacity = Math.random() > 0.7 ? (Math.random() * 0.2) + 0.1 : 0;
            
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="absolute rounded-sm"
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                  left: `${colIndex * 60}px`,
                  top: `${rowIndex * 60}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            );
          })
        ))}
      </div>
      
      {/* Larger decorative squares - similar to Monday.com design */}
      {Array.from({ length: 6 }).map((_, index) => {
        const size = Math.floor(Math.random() * 6) + 4; // 4-10px
        const top = Math.floor(Math.random() * 400); // Position within the 400px height
        const left = Math.floor(Math.random() * 100);
        const opacity = (Math.random() * 0.15) + 0.05; // 0.05-0.2
        
        return (
          <div
            key={`deco-${index}`}
            className="absolute rounded-sm"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `rgba(255, 255, 255, ${opacity})`,
              top: `${top}px`,
              left: `${left}%`,
              boxShadow: `0 0 10px rgba(255, 255, 255, 0.1)`
            }}
          />
        );
      })}
    </div>
  );
};

export default GridSquares;