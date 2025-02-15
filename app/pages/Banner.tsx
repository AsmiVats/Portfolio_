"use client";

import { useState, useRef} from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";

export default function Banner() {
  const [baseX, setBaseX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgWidth = 820;

  useAnimationFrame((_, delta) => {
    let moveBy = (delta / 1000) * 100; 
    setBaseX((prevBaseX) => (prevBaseX - moveBy) % (svgWidth * -4)); 
  });

  return (
    <div className="overflow-hidden relative w-full h-32 md:h-40 bg-[#4C6EE2]">
      <motion.div
        ref={containerRef}
        className="absolute flex"
        style={{ x: baseX }}
      >
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-[820px] flex-shrink-0">
            <Image
              src="/Region.svg"
              alt="Banner"
              width={svgWidth}
              height={100}
              className="w-full h-32 md:h-40 object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
