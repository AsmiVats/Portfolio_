'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello!", "Ciao!"];

export default function TextAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center text-white text-[110px] md:text-[166px] font-bold">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.span>
    </div>
  );
}
