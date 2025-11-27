import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MapPin, Calendar, Users, ShieldCheck, Heart, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import TourCard from '../components/TourCard';
import { TOURS, REVIEWS } from '../constants';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const featuredTours = TOURS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Japan Landscape" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-japanDark/30 via-japanDark/60 to-japanDark"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sakuraPink font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              Welcome to the Land of the Rising Sun
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
              Discover Japan <br /> Like Never Before
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Curated tours, seamless bookings, and unforgettable experiences in the heart of East Asia.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full max-w-4xl mx-auto flex flex-col md:flex-row gap-2 shadow-2xl"
          >
            <div className="flex-1 flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <MapPin className="text-japanRed mr-3" />
              <input type="text" placeholder="Where do you want to go?" className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none" />
            </div>
            <div className="flex-1 flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <Calendar className="text-japanRed mr-3" />
              <input type="text" placeholder="Dates" className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none" />
            </div>
            <div className="flex-1 flex items-center px-6 py-3">
              <Users className="text-japanRed mr-3" />
              <input type="text" placeholder="Travelers" className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none" />
            </div>
            <Link to="/tours" className="bg-japanRed hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
              Search <Search size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Decoration */}
        <motion.div style={{ y: y2 }} className="absolute bottom-10 left-10 opacity-30 hidden md:block">
           <div className="w-32 h-32 border border-sakuraPink rounded-full flex items-center justify-center">
             <div className="w-24 h-24 bg-japanRed rounded-full"></div>
           </div>
        </motion.div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-japanDark relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-2">Featured Experiences</h2>
              <p className="text-gray-400">Handpicked tours for the discerning traveler.</p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center text-japanRed hover:text-white transition-colors font-medium">
              View All Tours <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/tours" className="btn-primary inline-flex items-center text-japanRed font-bold">
              View All Tours <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-japanDarker border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Users, title: "Local Expert Guides", desc: "Connect with locals who know the hidden gems." },
              { icon: Heart, title: "Handpicked Experiences", desc: "Curated itineraries ensuring quality over quantity." },
              { icon: Clock, title: "24/7 Support", desc: "We are here for you around the clock during your trip." },
              { icon: ShieldCheck, title: "Flexible Booking", desc: "Book with confidence with our flexible refund policies." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-japanRed transition-colors duration-300">
                  <item.icon size={32} className="text-sakuraPink group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Horizontal Scroll Feel */}
      <section className="py-24 bg-japanDark overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
           <h2 className="text-4xl font-display font-bold text-white mb-2 text-center">Japan Highlights</h2>
           <p className="text-gray-400 text-center">Explore the diversity of the archipelago.</p>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap gap-6 px-6 overflow-x-auto pb-8 snap-x">
          {[
            { title: "Tokyo", sub: "Neon & Future", img: "https://picsum.photos/400/600?random=20" },
            { title: "Kyoto", sub: "Tradition & Zen", img: "https://picsum.photos/400/600?random=21" },
            { title: "Osaka", sub: "Kitchen of Japan", img: "https://picsum.photos/400/600?random=22" },
            { title: "Hokkaido", sub: "Wild Nature", img: "https://picsum.photos/400/600?random=23" },
          ].map((city, idx) => (
            <motion.div 
              key={idx}
              className="flex-shrink-0 w-full md:w-80 h-[400px] relative rounded-2xl overflow-hidden group cursor-pointer snap-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <img src={city.img} alt={city.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-display font-bold text-white">{city.title}</h3>
                <p className="text-sakuraPink font-medium">{city.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white text-japanDark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Traveler Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <div className="flex text-japanRed">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-japanRed relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div> {/* Abstract pattern placeholder */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready for your adventure?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Join thousands of happy travelers and discover the magic of Japan.
          </p>
          <Link to="/tours" className="inline-block bg-white text-japanRed font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-2xl transform hover:-translate-y-1">
            Start Planning Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;