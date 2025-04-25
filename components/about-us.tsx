"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Award, Users, TrendingUp } from 'lucide-react'

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { icon: <Users className="w-8 h-8 text-orange-500" />, value: "10+", label: "Years Experience" },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: "200+", label: "Projects Completed" },
    { icon: <TrendingUp className="w-8 h-8 text-orange-500" />, value: "50+", label: "Happy Clients" },
  ]

  return (
    <div className="container px-4 mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-16"
      >
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            About <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-600">
            We are a team of passionate professionals dedicated to delivering innovative solutions that help businesses
            grow and succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div 
            variants={itemVariants} 
            className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/Devxdis1.png?height=500&width=600"
              alt="Our team"
              fill
              
              className="object-cover"
            />
            <motion.div 
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 to-transparent"
              animate={{ 
                background: [
                  "linear-gradient(to right, rgba(249, 115, 22, 0.2), transparent)",
                  "linear-gradient(to right, rgba(249, 115, 22, 0.3), transparent)",
                  "linear-gradient(to right, rgba(249, 115, 22, 0.2), transparent)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold">
              Our <span className="text-orange-500">Story</span>
            </h3>
            <p className="text-gray-600">
              Our company has grown from a small startup to a recognized leader in the industry. We've
              helped businesses of all sizes transform their operations and achieve their goals through innovative
              technology solutions.
            </p>
            <p className="text-gray-600">
              Our mission is to empower organizations with cutting-edge tools and strategies that drive growth,
              efficiency, and competitive advantage in an ever-evolving digital landscape.
            </p>

            <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.span 
                    className="mt-2 text-2xl font-bold text-gray-800"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: index }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants} 
          className="relative p-8 overflow-hidden bg-orange-50 rounded-xl"
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <motion.div 
            className="absolute w-40 h-40 bg-orange-200 rounded-full opacity-50 -top-20 -right-20"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute w-40 h-40 bg-orange-300 rounded-full -bottom-20 -left-20 opacity-30"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Our <span className="text-orange-500">Values</span>
              </h3>
              <ul className="space-y-4">
                {["Innovation", "Excellence", "Integrity"].map((value, index) => (
                  <motion.li 
                    key={value} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-1 mt-1 mr-4 bg-orange-100 rounded-full">
                      <motion.div 
                        className="w-2 h-2 bg-orange-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: index }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{value}</h4>
                      <p className="text-sm text-gray-600">
                        {value === "Innovation" 
                          ? "We constantly explore new ideas and technologies to deliver cutting-edge solutions."
                          : value === "Excellence" 
                          ? "We strive for excellence in everything we do, from customer service to product delivery."
                          : "We conduct our business with honesty, transparency, and ethical practices."
                        }
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Our <span className="text-orange-500">Approach</span>
              </h3>
              <p className="mb-4 text-gray-600">
                We believe in a collaborative approach that puts our clients at the center of everything we do. Our
                process involves:
              </p>
              <ol className="space-y-2">
                {[
                  "Understanding your unique challenges and goals",
                  "Developing customized strategies and solutions",
                  "Implementing with precision and attention to detail",
                  "Measuring results and continuously improving"
                ].map((step, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="flex items-center justify-center w-6 h-6 mr-3 text-sm text-white bg-orange-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {index + 1}
                    </motion.span>
                    <span className="text-gray-700">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
