"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Award, Users, TrendingUp } from "lucide-react"

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
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
          <motion.div variants={itemVariants} className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Our team"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 to-transparent" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold">
              Our <span className="text-orange-500">Story</span>
            </h3>
            <p className="text-gray-600">
              our company has grown from a small startup to a recognized leader in the industry. We've
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
                >
                  {stat.icon}
                  <span className="mt-2 text-2xl font-bold text-gray-800">{stat.value}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="p-8 bg-orange-50 rounded-xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Our <span className="text-orange-500">Values</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-1 mt-1 mr-4 bg-orange-100 rounded-full">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Innovation</h4>
                    <p className="text-sm text-gray-600">
                      We constantly explore new ideas and technologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 mt-1 mr-4 bg-orange-100 rounded-full">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Excellence</h4>
                    <p className="text-sm text-gray-600">
                      We strive for excellence in everything we do, from customer service to product delivery.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 mt-1 mr-4 bg-orange-100 rounded-full">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Integrity</h4>
                    <p className="text-sm text-gray-600">
                      We conduct our business with honesty, transparency, and ethical practices.
                    </p>
                  </div>
                </li>
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
                <li className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 mr-3 text-sm text-white bg-orange-500 rounded-full">
                    1
                  </span>
                  <span className="text-gray-700">Understanding your unique challenges and goals</span>
                </li>
                <li className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 mr-3 text-sm text-white bg-orange-500 rounded-full">
                    2
                  </span>
                  <span className="text-gray-700">Developing customized strategies and solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 mr-3 text-sm text-white bg-orange-500 rounded-full">
                    3
                  </span>
                  <span className="text-gray-700">Implementing with precision and attention to detail</span>
                </li>
                <li className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 mr-3 text-sm text-white bg-orange-500 rounded-full">
                    4
                  </span>
                  <span className="text-gray-700">Measuring results and continuously improving</span>
                </li>
              </ol>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
