import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MapPin, Sparkles, ExternalLink, Loader2, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

interface MapsInsightProps {
  location: string;
}

const MapsInsight: React.FC<MapsInsightProps> = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<string>('');
  const [mapLinks, setMapLinks] = useState<{title: string, uri: string}[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      if (!process.env.API_KEY) {
        setError("API Key missing");
        setLoading(false);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `What are 3 distinct, highly-rated hidden gems or popular spots in ${location} that a traveler must visit? Provide a short, engaging description for each.`,
          config: {
            tools: [{ googleMaps: {} }],
          },
        });

        const text = response.text || "No details available.";
        setContent(text);

        // Extract map links
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        
        // Maps grounding specific structure check per instructions: 
        // "This includes groundingChunks.maps.uri and groundingChunks.maps.placeAnswerSources.reviewSnippets"
        // We iterate carefully to extract titles and URIs
        const specificMapLinks: {title: string, uri: string}[] = [];
        
        chunks.forEach((chunk: any) => {
             if (chunk.maps) {
                 specificMapLinks.push({
                     title: chunk.maps.title || "Location",
                     uri: chunk.maps.uri || "#"
                 });
             } else if (chunk.web) {
                 specificMapLinks.push({
                     title: chunk.web.title || "Web Link",
                     uri: chunk.web.uri || "#"
                 });
             }
        });

        setMapLinks(specificMapLinks);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Could not load AI insights.");
        setLoading(false);
      }
    };

    fetchInsights();
  }, [location]);

  if (error) return null; // Hide nicely on error

  return (
    <section className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-20">
            <Sparkles size={100} className="text-sakuraPink" />
        </div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-japanRed to-purple-600 rounded-lg">
            <Sparkles className="text-white" size={20} />
        </div>
        <h2 className="text-2xl font-display font-bold text-white">AI Travel Insights: {location}</h2>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Loader2 className="animate-spin mb-4 text-japanRed" size={32} />
          <p>Consulting the digital guide...</p>
        </div>
      ) : (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="space-y-6"
        >
          <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none">
            {/* Simple rendering of markdown-like text */}
            {content.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
            ))}
          </div>

          {mapLinks.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {mapLinks.map((link, idx) => (
                <a 
                    key={idx} 
                    href={link.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-black/40 hover:bg-japanRed/20 border border-white/10 hover:border-japanRed/50 rounded-xl transition-all group"
                >
                  <div className="bg-white/10 p-2 rounded-full group-hover:bg-japanRed group-hover:text-white transition-colors">
                    <Navigation size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold text-sm text-white truncate">{link.title}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                        View on Google Maps <ExternalLink size={10} />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
          
          <div className="text-xs text-gray-500 mt-4 flex items-center gap-2">
            <Sparkles size={12} />
            <span>Powered by Gemini 2.5 & Google Maps</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default MapsInsight;