import React from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

const Header: React.FC = () => {
  const { setCursorVariant } = useCursor();

  return (
    <motion.header 
      className="py-6 px-6 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 10.2, duration: 0.6 }}
    >
      <div 
        className="flex items-center gap-2"
        onMouseEnter={() => setCursorVariant('button')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <Film size={30} className="text-white" />
        <h1 className="text-2xl font-bold text-white tracking-wider">CINEMATICA</h1>
      </div>
      
      <motion.div
        className="text-white/70 text-lg"
        onMouseEnter={() => setCursorVariant('button')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <span className="hidden sm:inline">Your Premium</span> Movie Collection
      </motion.div>
    </motion.header>
  );
};

export default Header;