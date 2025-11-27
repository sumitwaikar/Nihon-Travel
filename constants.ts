import { Tour, Review } from './types';

export const TOURS: Tour[] = [
  {
    id: 'tokyo-neon',
    title: 'Tokyo Neon & Tradition',
    location: 'Tokyo',
    duration: '5 Days',
    durationDays: 5,
    price: 1800,
    rating: 4.9,
    reviews: 124,
    image: 'https://picsum.photos/800/600?random=1',
    category: 'Culture',
    description: 'Experience the electric energy of Shinjuku and the serene silence of Meiji Shrine. This tour perfectly balances the futuristic and traditional sides of Japan\'s capital.',
    highlights: ['Shibuya Crossing', 'Meiji Jingu Shrine', 'Akihabara Electronics Town', 'Tsukiji Outer Market'],
    itinerary: [
      { day: 1, title: 'Arrival & Shinjuku', desc: 'Arrive in Tokyo. Private transfer to hotel. Evening walking tour of Shinjuku\'s Golden Gai.' },
      { day: 2, title: 'Old & New Tokyo', desc: 'Visit Asakusa Senso-ji Temple in the morning and the Tokyo Skytree in the afternoon.' },
      { day: 3, title: 'Techno & Pop Culture', desc: 'Explore Akihabara and Harajuku. Optional maid cafe experience.' },
      { day: 4, title: 'Sushi & Gardens', desc: 'Sushi making class near Tsukiji. Afternoon stroll in Hamarikyu Gardens.' },
      { day: 5, title: 'Departure', desc: 'Free time until airport transfer.' }
    ],
    included: ['4-Star Hotels', 'Daily Breakfast', 'Suica Card', 'English Guide'],
    excluded: ['International Flights', 'Lunches & Dinners', 'Travel Insurance']
  },
  {
    id: 'kyoto-zen',
    title: 'Kyoto Zen Escape',
    location: 'Kyoto',
    duration: '4 Days',
    durationDays: 4,
    price: 1450,
    rating: 5.0,
    reviews: 89,
    image: 'https://picsum.photos/800/600?random=2',
    category: 'Culture',
    description: 'Immerse yourself in the ancient capital. Walk through thousands of torii gates and witness a traditional tea ceremony.',
    highlights: ['Fushimi Inari Shrine', 'Kinkaku-ji (Golden Pavilion)', 'Arashiyama Bamboo Grove', 'Gion District'],
    itinerary: [
      { day: 1, title: 'Welcome to Kyoto', desc: 'Check in to a traditional Ryokan. Kaiseki dinner included.' },
      { day: 2, title: 'The Golden Pavilion', desc: 'Visit Kinkaku-ji and Ryoan-ji rock garden.' },
      { day: 3, title: 'Bamboo & Monkeys', desc: 'Arashiyama Bamboo Grove and Monkey Park Iwatayama.' },
      { day: 4, title: 'Geisha Culture', desc: 'Walking tour of Gion. Departure in the afternoon.' }
    ],
    included: ['Ryokan Stay', 'Kaiseki Dinner', 'Tea Ceremony', 'Private Guide'],
    excluded: ['Flights', 'Personal Shopping']
  },
  {
    id: 'hokkaido-snow',
    title: 'Hokkaido Snow Safari',
    location: 'Hokkaido',
    duration: '7 Days',
    durationDays: 7,
    price: 2500,
    rating: 4.8,
    reviews: 45,
    image: 'https://picsum.photos/800/600?random=3',
    category: 'Nature',
    description: 'Discover the wild north. Perfect for powder snow enthusiasts and lovers of fresh seafood and hot springs.',
    highlights: ['Niseko Skiing', 'Sapporo Beer Museum', 'Otaru Canal', 'Noboribetsu Onsen'],
    itinerary: [
      { day: 1, title: 'Sapporo Arrival', desc: 'Transfer to Sapporo. Ramen alley dinner.' },
      { day: 2, title: 'Sapporo Highlights', desc: 'Beer museum and Odori park.' },
      { day: 3, title: 'Otaru Day Trip', desc: 'Romantic canal walk and glass blowing workshops.' },
      { day: 4, title: 'To Niseko', desc: 'Transfer to Niseko ski resort.' },
      { day: 5, title: 'Slope Day', desc: 'Full day skiing or snowboarding.' },
      { day: 6, title: 'Onsen Relaxation', desc: 'Noboribetsu hot spring experience.' },
      { day: 7, title: 'Departure', desc: 'Transfer to Chitose Airport.' }
    ],
    included: ['Ski Pass (2 days)', 'Onsen Entry', 'Hotels', 'Transfers'],
    excluded: ['Ski Gear Rental', 'Flights']
  },
  {
    id: 'osaka-foodie',
    title: 'Osaka Kitchen of Japan',
    location: 'Osaka',
    duration: '3 Days',
    durationDays: 3,
    price: 900,
    rating: 4.7,
    reviews: 210,
    image: 'https://picsum.photos/800/600?random=4',
    category: 'Food',
    description: 'Eat your way through Dotonbori. Takoyaki, Okonomiyaki, and Wagyu beef await in this culinary adventure.',
    highlights: ['Dotonbori Street Food', 'Osaka Castle', 'Kuromon Market', 'Umeda Sky Building'],
    itinerary: [
      { day: 1, title: 'Dotonbori Dive', desc: 'Night food tour in Dotonbori.' },
      { day: 2, title: 'History & Views', desc: 'Osaka Castle and Umeda Sky Building observation deck.' },
      { day: 3, title: 'Market Morning', desc: 'Kuromon Ichiba Market brunch and departure.' }
    ],
    included: ['Food Tour Costs', 'Hotel', 'Guide'],
    excluded: ['Alcoholic Beverages', 'Flights']
  },
  {
    id: 'anime-pilgrimage',
    title: 'Ultimate Anime Pilgrimage',
    location: 'Tokyo',
    duration: '6 Days',
    durationDays: 6,
    price: 2100,
    rating: 5.0,
    reviews: 300,
    image: 'https://picsum.photos/800/600?random=5',
    category: 'Anime',
    description: 'Walk in the footsteps of your favorite characters. Visit real-life locations from hit series and shop till you drop.',
    highlights: ['Ghibli Museum', 'Akihabara', 'Nakano Broadway', 'Odaiba Gundam'],
    itinerary: [
      { day: 1, title: 'Arrival', desc: 'Welcome to Tokyo.' },
      { day: 2, title: 'Electric Town', desc: 'Full day in Akihabara.' },
      { day: 3, title: 'Studio Ghibli', desc: 'Museum tour (tickets guaranteed).' },
      { day: 4, title: 'Retro Gaming', desc: 'Nakano Broadway vintage hunt.' },
      { day: 5, title: 'Life Size Robots', desc: 'Odaiba Gundam and TeamLab Planets.' },
      { day: 6, title: 'Sayonara', desc: 'Departure.' }
    ],
    included: ['Ghibli Tickets', 'TeamLab Tickets', 'Guide', 'Hotels'],
    excluded: ['Figure Shopping Budget', 'Flights']
  },
  {
    id: 'luxury-ryokan',
    title: 'Luxury Ryokan Retreat',
    location: 'Hakone',
    duration: '3 Days',
    durationDays: 3,
    price: 3500,
    rating: 5.0,
    reviews: 52,
    image: 'https://picsum.photos/800/600?random=6',
    category: 'Luxury',
    description: 'The ultimate relaxation experience with private open-air baths and views of Mount Fuji.',
    highlights: ['Private Onsen', 'Kaiseki Dining', 'Lake Ashi Cruise', 'Open Air Museum'],
    itinerary: [
      { day: 1, title: 'Romance Car', desc: 'Luxury train to Hakone. Check in to 5-star Ryokan.' },
      { day: 2, title: 'Art & Nature', desc: 'Open Air Museum and ropeway to Owakudani.' },
      { day: 3, title: 'Lake Ashi', desc: 'Pirate ship cruise and return to Tokyo.' }
    ],
    included: ['5-Star Ryokan', 'All Meals', 'First Class Train'],
    excluded: ['Spa Treatments', 'Flights']
  }
];

export const REVIEWS: Review[] = [
  { id: '1', name: 'Sarah Jenkins', rating: 5, text: 'Absolutely magical. The guide was incredibly knowledgeable!', avatar: 'https://picsum.photos/100/100?random=10' },
  { id: '2', name: 'David Chen', rating: 5, text: 'Seamless booking and the itinerary was perfect.', avatar: 'https://picsum.photos/100/100?random=11' },
  { id: '3', name: 'Elena Rodriguez', rating: 4, text: 'Loved the food tour in Osaka. Highly recommend.', avatar: 'https://picsum.photos/100/100?random=12' },
];
