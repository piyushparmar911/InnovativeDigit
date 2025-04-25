"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, BarChart, Smartphone, Globe, Shield, Lightbulb, ChevronRight } from 'lucide-react'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [activeService, setActiveService] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: <Code className="w-10 h-10 text-orange-500" />,
      title: "Web Development",
      shortDesc: "Custom websites and web applications",
      longDesc:
        "We build responsive, high-performance websites and web applications tailored to your specific business needs. Our development team uses the latest technologies to ensure your web presence is modern, secure, and scalable.",
      features: [
        "Responsive design for all devices",
        "Custom CMS integration",
        "E-commerce solutions",
        "Performance optimization",
      ],
    },
    {
      icon: <BarChart className="w-10 h-10 text-orange-500" />,
      title: "Digital Marketing",
      shortDesc: "Grow your online presence and reach",
      longDesc:
        "Our digital marketing strategies help you connect with your target audience, increase brand awareness, and drive conversions. We use data-driven approaches to maximize your marketing ROI.",
      features: ["SEO optimization", "Social media marketing", "Content strategy", "PPC advertising"],
    },
    {
      icon: <Smartphone className="w-10 h-10 text-orange-500" />,
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform mobile apps",
      longDesc:
        "We design and develop intuitive, feature-rich mobile applications for iOS and Android platforms. Our mobile solutions help businesses engage users and streamline operations on the go.",
      features: ["Native iOS and Android apps", "Cross-platform development", "UI/UX design", "App store optimization"],
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Cloud Solutions",
      shortDesc: "Scalable and secure cloud infrastructure",
      longDesc:
        "Our cloud solutions help businesses leverage the power of cloud computing for improved scalability, reliability, and cost-efficiency. We provide migration, management, and optimization services.",
      features: ["Cloud migration", "Infrastructure as code", "Serverless architecture", "DevOps implementation"],
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Cybersecurity",
      shortDesc: "Protect your business from threats",
      longDesc:
        "We help organizations strengthen their security posture with comprehensive cybersecurity services. Our team identifies vulnerabilities and implements robust security measures to protect your valuable data.",
      features: ["Security assessments", "Penetration testing", "Compliance consulting", "Security awareness training"],
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
      title: "IT Consulting",
      shortDesc: "Strategic technology guidance",
      longDesc:
        "Our IT consulting services provide strategic guidance to help businesses leverage technology for growth and competitive advantage. We work with you to develop IT roadmaps aligned with your business objectives.",
      features: ["IT strategy development", "Technology assessment", "Digital transformation", "Process optimization"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container px-4 mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600">
            We offer a comprehensive range of services to help your business thrive in the digital landscape. Explore
            our offerings below.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 ${
                activeService === index ? "border-orange-500" : "border-transparent"
              } relative overflow-hidden`}
              onClick={() => setActiveService(activeService === index ? null : index)}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -5 }}
            >
              {hoveredService === index && (
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-orange-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="p-3 bg-orange-100 rounded-lg"
                    whileHover={{ rotate: 5 }}
                    animate={hoveredService === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.shortDesc}</p>
                  </div>
                </div>
                <motion.div 
                  animate={{ 
                    rotate: activeService === index ? 90 : 0,
                    x: hoveredService === index && activeService !== index ? 5 : 0
                  }} 
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-orange-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {activeService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 pt-4 mt-4 border-t border-gray-100"
                  >
                    <p className="mb-4 text-gray-600">{service.longDesc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: i }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      className="relative px-4 py-2 mt-4 overflow-hidden text-sm font-medium text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      <motion.span 
                        className="absolute inset-0 w-0 bg-white opacity-20"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                      Learn More
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative p-8 overflow-hidden text-center text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl"
        >
          <motion.div 
            className="absolute w-40 h-40 bg-white rounded-full -top-20 -right-20 opacity-10"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bg-white rounded-full -bottom-20 -left-20 w-60 h-60 opacity-10"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -10, 0],
              y: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <h3 className="mb-4 text-2xl font-bold">Need a Custom Solution?</h3>
            <p className="max-w-2xl mx-auto mb-6">
              We understand that every business is unique. Contact us to discuss your specific requirements and how we can
              tailor our services to meet your needs.
            </p>
            <motion.button
              className="relative px-6 py-3 overflow-hidden font-medium text-orange-500 transition-colors bg-white rounded-md hover:bg-gray-100"
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
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
