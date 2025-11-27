import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-japanDark border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-japanDark to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 bg-japanRed/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
          {tour.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex justify-between items-center mb-3 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-japanRed" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-white">{tour.rating}</span>
            <span className="text-xs">({tour.reviews})</span>
          </div>
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-sakuraPink transition-colors">
          {tour.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
            {tour.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <div>
            <span className="text-xs text-gray-500 uppercase block">From</span>
            <span className="text-lg font-bold text-white">${tour.price}</span>
          </div>
          
          <Link to={`/tour/${tour.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-japanRed text-white p-3 rounded-full transition-colors duration-300"
            >
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;