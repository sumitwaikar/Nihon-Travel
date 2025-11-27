import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle, XCircle, Star, Calendar } from 'lucide-react';
import { TOURS } from '../constants';
import MapsInsight from '../components/MapsInsight';

const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tour = TOURS.find(t => t.id === id);

  if (!tour) {
    return <div className="h-screen flex items-center justify-center text-white bg-japanDark">Tour not found</div>;
  }

  return (
    <div className="bg-japanDark min-h-screen text-gray-200">
      {/* Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-japanDark via-japanDark/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-japanRed px-3 py-1 text-white text-xs font-bold uppercase rounded-sm">{tour.category}</span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 text-white text-xs font-bold uppercase rounded-sm flex items-center gap-1">
                <Star size={12} fill="white" /> {tour.rating}
              </span>
            </div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
            >
              {tour.title}
            </motion.h1>
            <div className="flex items-center gap-6 text-gray-300">
              <span className="flex items-center gap-2"><Clock size={18} className="text-japanRed"/> {tour.duration}</span>
              <span className="flex items-center gap-2"><MapPin size={18} className="text-japanRed"/> {tour.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400 leading-relaxed text-lg">{tour.description}</p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-sakuraPink rounded-full"></div>
                    <span className="text-white font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* AI Maps Insight */}
            <MapsInsight location={tour.location} />

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-8">Itinerary</h2>
              <div className="relative border-l-2 border-white/10 ml-3 space-y-12">
                {tour.itinerary.map((item, index) => (
                  <div key={index} className="relative pl-8 group">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-japanRed border-4 border-japanDark group-hover:scale-125 transition-transform"></span>
                    <h3 className="text-xl font-bold text-white mb-1">Day {item.day}: {item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Included</h3>
                <ul className="space-y-2">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Not Included</h3>
                <ul className="space-y-2">
                  {tour.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <XCircle size={18} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Booking Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-japanDarker p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex justify-between items-end mb-6">
                 <div>
                   <p className="text-sm text-gray-400">Starting from</p>
                   <p className="text-3xl font-bold text-white">${tour.price}</p>
                 </div>
                 <div className="text-right">
                   <p className="text-sm text-gray-400">Per Person</p>
                 </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-white/10 transition">
                  <span className="text-gray-300">Select Date</span>
                  <Calendar size={18} className="text-japanRed" />
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-white/10 transition">
                  <span className="text-gray-300">2 Travelers</span>
                  <span className="text-japanRed font-bold">Edit</span>
                </div>
              </div>

              <Link to={`/booking/${tour.id}`} className="block w-full bg-japanRed hover:bg-red-700 text-white font-bold py-4 rounded-lg text-center transition-all duration-300 shadow-[0_0_20px_rgba(215,0,38,0.4)]">
                Book This Tour
              </Link>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                No payment required today. Free cancellation up to 7 days before.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetail;