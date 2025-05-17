import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

const CustomCursor: React.FC = () => {
  const { cursorVariant } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
        
        // Add slight delay to dot cursor for trail effect
        setTimeout(() => {
          if (cursorDotRef.current) {
            cursorDotRef.current.style.top = `${e.clientY}px`;
            cursorDotRef.current.style.left = `${e.clientX}px`;
          }
        }, 50);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      x: -16,
      y: -16
    },
    button: {
      height: 64,
      width: 64,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      x: -32,
      y: -32
    },
    card: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      x: -24,
      y: -24
    }
  };

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="cursor-outer fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <div 
        ref={cursorDotRef}
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 translate-x-[-4px] translate-y-[-4px]"
      />
    </>
  );
};

export default CustomCursor;