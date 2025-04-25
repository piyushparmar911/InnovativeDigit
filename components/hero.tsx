"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateMovement = (axis: 'x' | 'y', factor: number = 20) => {
    const center = axis === 'x' ? window.innerWidth / 2 : window.innerHeight / 2
    const position = axis === 'x' ? mousePosition.x : mousePosition.y
    return (position - center) / factor
  }

  return (
    <div className="relative flex items-center min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-64 h-64 bg-orange-200 rounded-full top-20 right-10 opacity-30"
          animate={{
            x: calculateMovement('x', -30),
            y: calculateMovement('y', -30),
          }}
          transition={{ type: "spring", stiffness: 10, damping: 20 }}
        />
        <motion.div 
          className="absolute w-40 h-40 bg-orange-300 rounded-full bottom-20 left-10 opacity-20"
          animate={{
            x: calculateMovement('x', 40),
            y: calculateMovement('y', 40),
          }}
          transition={{ type: "spring", stiffness: 10, damping: 20 }}
        />
        <motion.div 
          className="absolute w-20 h-20 bg-orange-400 rounded-full top-1/3 left-1/4 opacity-10"
          animate={{
            x: calculateMovement('x', 20),
            y: calculateMovement('y', 20),
          }}
          transition={{ type: "spring", stiffness: 10, damping: 20 }}
        />
        <motion.div 
          className="absolute w-32 h-32 bg-orange-100 rounded-full bottom-1/4 right-1/4 opacity-20"
          animate={{
            x: calculateMovement('x', 25),
            y: calculateMovement('y', 25),
          }}
          transition={{ type: "spring", stiffness: 10, damping: 20 }}
        />
      </div>

      <div className="container z-10 px-4 py-32 mx-auto md:py-0">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              DevXdiscovery
              <br />
              <motion.span 
                className="text-orange-500"
                animate={{ 
                  color: ["#f97316", "#ea580c", "#f97316", "#fb923c", "#f97316"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                Where Ideas Turn Into Impact
              </motion.span>
            </motion.h1>

            <motion.p
              className="max-w-lg text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Innovation isn't optional—it's essential. At DevXdiscovery, we don't just build software; we engineer possibilities. Whether you're shaping a startup dream or scaling an enterprise vision, our expert team delivers cutting-edge solutions with speed, style, and precision. You imagine it. We design, develop, and launch it—with passion and purpose.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="relative px-6 py-3 overflow-hidden font-medium text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <motion.span 
                  className="absolute inset-0 w-0 bg-white opacity-20"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                Our Services
              </motion.button>

              <motion.button
                className="relative px-6 py-3 overflow-hidden font-medium text-orange-500 transition-colors border border-orange-500 rounded-md hover:bg-orange-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <motion.span 
                  className="absolute inset-0 w-0 bg-orange-500 opacity-10"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[400px] w-full"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{
                  rotateY: calculateMovement('x', 30),
                  rotateX: -calculateMovement('y', 30),
                }}
                transition={{ type: "spring", stiffness: 50, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full"
              >
                <Image
                  src="/Devxdis.png?height=600&width=600"
                  alt="Business solutions illustration"
                  fill
                  className="object-contain"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-xl"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-10 left-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="flex justify-center w-8 h-12 border-2 border-orange-500 rounded-full">
          <motion.div
            className="w-1.5 h-3 bg-orange-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </div>
      </motion.div>
    </div>
  )
}
