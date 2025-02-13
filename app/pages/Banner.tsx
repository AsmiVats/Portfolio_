"use client"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export default function Banner() {
  const baseX = useMotionValue(0);

  useAnimationFrame((time, delta) => {
    let moveBy = (delta / 1000) * 100;
    baseX.set(baseX.get() - moveBy);
  });

  return (
    <div className="overflow-hidden border border-b-white relative w-full h-30 md:h-40 bg-[#4C6EE2]">
      <motion.div
        className="absolute flex whitespace-nowrap"
        style={{ x: baseX }}
        transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10, 
          }}
      >
        {[...Array(10)].map((_, i) => ( 
          <img
            key={i}
            src="/Region.svg"
            className="w-auto h-30 md:h-40 object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
}
