import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Info } from 'lucide-react';
import { Movie } from '../../types';
import { useCursor } from '../../context/CursorContext';
import MovieDetails from './MovieDetails';

interface MovieCardProps {
  movie: Movie;
  index: number;
  isLiked: boolean;
  onToggleLike: (id: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index, isLiked, onToggleLike }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { setCursorVariant } = useCursor();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorVariant('card');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorVariant('default');
  };

  const handleButtonMouseEnter = () => {
    setCursorVariant('button');
  };

  const handleButtonMouseLeave = () => {
    setCursorVariant('card');
  };

  return (
    <>
      <motion.div
        className="relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-gray-900 to-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
        whileHover={{ 
          scale: 1.05, 
          zIndex: 10,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative pb-[140%] overflow-hidden">
          <motion.img 
            src={movie.posterUrl} 
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-4 right-4 flex gap-2">
            <motion.button
              className={`p-2 rounded-full ${
                isLiked ? 'bg-rose-500' : 'bg-black/60 backdrop-blur-sm'
              }`}
              whileTap={{ scale: 0.9 }}
              onClick={() => onToggleLike(movie.id)}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              <Heart 
                size={24} 
                className={isLiked ? 'text-white fill-current' : 'text-white'} 
              />
            </motion.button>
            
            <motion.button
              className="p-2 rounded-full bg-black/60 backdrop-blur-sm"
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowDetails(true)}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              <Info size={24} className="text-white" />
            </motion.button>
          </div>
        </div>

        <div className="px-4 py-4">
          <h3 className="text-xl font-bold text-white mb-1">{movie.title}</h3>
          <div className="flex justify-between items-center text-gray-400">
            <span>{movie.year}</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs font-medium">
              ★ {movie.rating}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {movie.genre.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {showDetails && (
        <MovieDetails movie={movie} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default MovieCard;