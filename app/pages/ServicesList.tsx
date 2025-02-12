"use client"

import { motion } from "framer-motion"
import { Circle, Star, Sparkles, Diamond } from "lucide-react"

const Semicircle = () => (
  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19C15.866 19 19 15.866 19 12H5C5 15.866 8.13401 19 12 19Z" fill="#BFFF80" />
  </svg>
)

export default function ServicesList() {
  const services = [
    {
      text: "Software Developer",
      decoration: <Circle className="text-[#B4A7FF] fill-[#B4A7FF]" size={70} />,
    },
    {
      text: "Web Designer",
      decoration: <Semicircle />,
    },
    {
      text: "Motion Graphic",
      decoration: <Sparkles className="text-[#FF9EDB]" size={70} />,
    },
    {
      text: "Illustration",
      decoration: <Diamond className="text-[#809FFF] fill-[#809FFF]" size={70} />,
    },
    {
      text: "Content Writer",
      decoration: <Star className="text-[#FFE380] fill-[#FFE380]" size={70} />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], 
      },
    },
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center space-y-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center justify-center gap-3 text-white group"
          >
            <span
              className="text-4xl md:text-7xl whitespace-nowrap font-ivy-presto"
              style={{
                fontFamily: "'IvyPresto', serif",
                fontStyle: "italic",
              }}
            >
              {service.text}
            </span>
            {/* <motion.div
            className="flex justify-center items-center"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {service.decoration}
            </motion.div> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

