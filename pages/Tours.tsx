import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import TourCard from '../components/TourCard';
import { TOURS } from '../constants';

const Tours: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Culture', 'Food', 'Nature', 'Anime', 'Luxury'];

  const filteredTours = selectedCategory === 'All' 
    ? TOURS 
    : TOURS.filter(t => t.category === selectedCategory);

  const FilterContent = () => (
    <>
      <div className="mb-8">
        <h4 className="text-sakuraPink font-bold mb-4 text-sm uppercase tracking-wider">Categories</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center transition-colors ${selectedCategory === cat ? 'border-japanRed' : ''}`}>
                  {selectedCategory === cat && <div className="w-2 h-2 bg-japanRed rounded-full" />}
              </div>
              <input 
                type="radio" 
                name="category" 
                className="hidden" 
                checked={selectedCategory === cat} 
                onChange={() => setSelectedCategory(cat)} 
              />
              <span className={`text-sm group-hover:text-white transition-colors ${selectedCategory === cat ? 'text-white font-medium' : 'text-gray-400'}`}>
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-sakuraPink font-bold mb-4 text-sm uppercase tracking-wider">Duration</h4>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full cursor-pointer hover:bg-white/10">1-3 Days</span>
          <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full cursor-pointer hover:bg-white/10">4-7 Days</span>
          <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full cursor-pointer hover:bg-white/10">8+ Days</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="pt-24 pb-24 min-h-screen bg-japanDark">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">Explore Tours</h1>
            <p className="text-gray-400">Find the perfect itinerary for your Japanese journey.</p>
          </div>
          
          <button 
            onClick={() => setShowFilters(true)}
            className="mt-4 md:mt-0 flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition md:hidden"
          >
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          {/* Desktop Sidebar (Static) */}
          <aside className="hidden md:block md:w-64 flex-shrink-0">
            <div className="sticky top-28 bg-japanDarker p-6 rounded-2xl border border-white/10">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Sidebar (Animated Drawer) */}
          <AnimatePresence>
            {showFilters && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowFilters(false)}
                  className="fixed inset-0 bg-black/80 z-40 md:hidden"
                />
                
                {/* Drawer */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 left-0 h-full w-80 bg-japanDarker z-50 p-6 border-r border-white/10 shadow-2xl md:hidden overflow-y-auto"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-white text-xl">Filters</h3>
                    <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-white/10 rounded-full">
                      <X className="text-white" size={24} />
                    </button>
                  </div>
                  <FilterContent />
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="w-full bg-japanRed py-3 rounded-lg text-white font-bold mt-8"
                  >
                    Show Results
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Grid */}
          <div className="flex-grow">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </motion.div>
            
            {filteredTours.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No tours found in this category.</p>
                <button onClick={() => setSelectedCategory('All')} className="mt-4 text-japanRed underline">View all tours</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;