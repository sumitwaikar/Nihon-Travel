import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-japanDarker text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <MapPin className="text-japanRed" />
               <span className="text-2xl font-display font-bold">NIHON<span className="text-sakuraPink">TRAVEL</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Curating unforgettable Japanese experiences for the modern traveler. From Tokyo's neon lights to Kyoto's silent temples.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-sakuraPink">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-sakuraPink">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-japanRed" />
                <span>hello@nihontravel.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-japanRed" />
                <span>+81 3-1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-japanRed" />
                <span>Shibuya, Tokyo, Japan</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-sakuraPink">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
            </div>
            <div className="mt-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                 <div className="w-4 h-4 rounded-full bg-japanRed"></div>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nihon Travel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-japanRed hover:text-white transition-all duration-300">
    {icon}
  </a>
);

export default Footer;