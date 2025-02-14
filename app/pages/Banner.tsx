"use client"

import { useState, useRef, useCallback } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from 'next/image';

export default function Banner() {
  const [baseX, setBaseX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const resetPosition = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      if (baseX <= -containerWidth) {
        setBaseX(0);
      }
    }
  }, [baseX]);

  useAnimationFrame((_, delta) => {
    const moveBy = (delta / 1000) * 100;
    setBaseX(prevBaseX => prevBaseX - moveBy);
    resetPosition();
  });

  return (
    <div className="overflow-hidden border border-b-white relative w-full h-30 md:h-40 bg-[#4C6EE2]">
      <motion.div
        ref={containerRef}
        className="absolute flex whitespace-nowrap"
        style={{ x: baseX }}
      >
        {[...Array(4)].map((_, i) => ( 
          <Image
            key={i}
            src="/Region.svg"
            alt="Banner"
            width={400}  
            height={100} 
            className="w-auto h-30 md:h-40 object-cover mx-6 md:mx-2"
          />
        ))}
      </motion.div>
    </div>
  );
}