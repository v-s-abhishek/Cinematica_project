import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Award, Clock, Star, Users } from 'lucide-react';
import { MovieDetailsProps } from '../../types';
import { useCursor } from '../../context/CursorContext';

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  const { setCursorVariant } = useCursor();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl max-w-4xl w-full overflow-hidden relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setCursorVariant('card')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={onClose}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('card')}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            <div className="md:w-2/3 p-6 md:p-8">
              <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{movie.runtime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-300">{movie.rating}/10</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{movie.director}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm text-white"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {movie.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Awards
                </h3>
                <div className="space-y-2">
                  {movie.awards.map((award, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-lg p-3"
                    >
                      <div className="font-medium text-white">{award.name}</div>
                      <div className="text-sm text-gray-400">
                        {award.category} ({award.year})
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300"
                    >
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('card')}
              >
                <Play className="w-5 h-5" />
                Watch Trailer
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MovieDetails;