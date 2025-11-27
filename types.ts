export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string; // e.g. "7 Days"
  durationDays: number;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: 'Culture' | 'Food' | 'Nature' | 'Anime' | 'Luxury';
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; desc: string }[];
  included: string[];
  excluded: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface BookingData {
  tourId: string;
  date: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}
