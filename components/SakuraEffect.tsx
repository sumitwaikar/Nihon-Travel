import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SakuraEffect: React.FC = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    // Create a fixed number of petals
    const petalCount = 15;
    const newPetals = Array.from({ length: petalCount }, (_, i) => i);
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {petals.map((i) => (
        <motion.div
          key={i}
          className="absolute top-[-20px] bg-sakuraPink/60 rounded-full"
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            left: Math.random() * 100 + '%',
            borderRadius: '60% 40% 40% 60% / 60% 40% 60% 40%', // Petal shape
          }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 0],
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50], // Drift left/right
          }}
          transition={{
            duration: Math.random() * 10 + 10, // 10-20s duration
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default SakuraEffect;