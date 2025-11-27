import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { TOURS } from '../constants';

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tour = TOURS.find(t => t.id === id);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    request: ''
  });

  if (!tour) return <div>Tour not found</div>;

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const total = tour.price * formData.guests;

  return (
    <div className="min-h-screen bg-japanDark pt-28 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4 text-sm font-medium text-gray-400">
            <span className={step >= 1 ? 'text-japanRed' : ''}>1. Trip Details</span>
            <span className={step >= 2 ? 'text-japanRed' : ''}>2. Your Info</span>
            <span className={step >= 3 ? 'text-japanRed' : ''}>3. Confirmation</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-japanRed"
              initial={{ width: '0%' }}
              animate={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="bg-japanDarker border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Summary Sidebar (Left/Top) */}
          <div className="p-8 bg-white/5 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-xl font-display font-bold text-white mb-6">Booking Summary</h3>
            <img src={tour.image} alt={tour.title} className="w-full h-32 object-cover rounded-lg mb-4 opacity-80" />
            <h4 className="font-bold text-white mb-1">{tour.title}</h4>
            <p className="text-gray-400 text-sm mb-4">{tour.duration} • {tour.location}</p>
            
            <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Guests</span>
                <span>{formData.guests}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Price per person</span>
                <span>${tour.price}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-white/10 mt-4">
                <span>Total</span>
                <span className="text-japanRed">${total}</span>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-8 md:w-2/3 relative">
            <AnimatePresence mode="wait">
              
              {/* Step 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">When are you traveling?</h2>
                  
                  <div>
                    <label className="block text-gray-400 mb-2">Select Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-japanRed focus:outline-none transition-colors"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2">Number of Travelers</label>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5, 6].map(num => (
                         <button
                           key={num}
                           onClick={() => setFormData({...formData, guests: num})}
                           className={`w-12 h-12 rounded-lg font-bold transition-all ${formData.guests === num ? 'bg-japanRed text-white scale-110 shadow-lg' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                         >
                           {num}
                         </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button onClick={nextStep} className="bg-white text-japanDark font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition flex items-center">
                      Next Step <ChevronRight size={18} className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Traveler Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-japanRed focus:outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-japanRed focus:outline-none" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-japanRed focus:outline-none" placeholder="+1 234 567 890" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Special Requests (Optional)</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-japanRed focus:outline-none h-24" placeholder="Dietary restrictions, occasion..." />
                  </div>

                  <div className="pt-6 flex justify-between">
                     <button onClick={prevStep} className="text-gray-400 hover:text-white flex items-center">
                      <ChevronLeft size={18} className="mr-2" /> Back
                    </button>
                    <button onClick={nextStep} className="bg-japanRed text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition flex items-center shadow-lg">
                      Complete Booking <Check size={18} className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                    <Check size={40} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">Booking Requested!</h2>
                  <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Arigato! We have received your booking request for <strong>{tour.title}</strong>. One of our agents will contact you shortly to finalize details.
                  </p>
                  <Link to="/" className="text-japanRed font-bold hover:underline">
                    Back to Home
                  </Link>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;