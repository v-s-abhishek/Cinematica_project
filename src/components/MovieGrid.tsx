import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MovieCard from './ui/MovieCard';
import { movies } from '../data/movies';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MovieGrid: React.FC = () => {
  const [likedMovies, setLikedMovies] = useLocalStorage<number[]>('likedMovies', []);

  const toggleLike = (id: number) => {
    setLikedMovies(prev => 
      prev.includes(id) 
        ? prev.filter(movieId => movieId !== id) 
        : [...prev, id]
    );
  };

  const isLiked = (id: number) => likedMovies.includes(id);

  return (
    <motion.div 
      className="max-w-screen-xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 10.3, duration: 1 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 10.4, duration: 0.6 }}
      >
        Trending Movies
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            index={index}
            isLiked={isLiked(movie.id)}
            onToggleLike={toggleLike}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MovieGrid;