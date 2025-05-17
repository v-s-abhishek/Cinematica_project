import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Clapperboard, Star, Award } from 'lucide-react';

const IntroAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background Elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 10, times: [0, 0.5, 1], repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
        </motion.div>

        {/* Floating Icons */}
        {[Film, Clapperboard, Star, Award].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 4,
              delay: index * 0.5,
              repeat: 2,
              ease: "easeInOut"
            }}
          >
            <Icon size={40} className="text-white/30" />
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="text-center z-10">
          <motion.div
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.2, 1],
              opacity: [0, 1, 1]
            }}
            transition={{ 
              duration: 2,
              times: [0, 0.6, 1],
              ease: "easeInOut"
            }}
          >
            <Film size={120} className="text-white mx-auto" />
            
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.h1 
            className="mt-8 text-6xl font-bold text-white tracking-wider font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            CINEMATICA
          </motion.h1>
          
          <motion.p
            className="mt-4 text-xl text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Your Premium Movie Experience
          </motion.p>
          
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <motion.div 
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative z-10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                delay: 4, 
                duration: 5,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute inset-0 bg-white/20 blur-lg"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;