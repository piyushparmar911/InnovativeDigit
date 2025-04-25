"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, BarChart, Smartphone, Globe, Shield, Lightbulb, ChevronRight } from "lucide-react"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      icon: <Code className="h-10 w-10 text-orange-500" />,
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
      icon: <BarChart className="h-10 w-10 text-orange-500" />,
      title: "Digital Marketing",
      shortDesc: "Grow your online presence and reach",
      longDesc:
        "Our digital marketing strategies help you connect with your target audience, increase brand awareness, and drive conversions. We use data-driven approaches to maximize your marketing ROI.",
      features: ["SEO optimization", "Social media marketing", "Content strategy", "PPC advertising"],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-orange-500" />,
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform mobile apps",
      longDesc:
        "We design and develop intuitive, feature-rich mobile applications for iOS and Android platforms. Our mobile solutions help businesses engage users and streamline operations on the go.",
      features: ["Native iOS and Android apps", "Cross-platform development", "UI/UX design", "App store optimization"],
    },
    {
      icon: <Globe className="h-10 w-10 text-orange-500" />,
      title: "Cloud Solutions",
      shortDesc: "Scalable and secure cloud infrastructure",
      longDesc:
        "Our cloud solutions help businesses leverage the power of cloud computing for improved scalability, reliability, and cost-efficiency. We provide migration, management, and optimization services.",
      features: ["Cloud migration", "Infrastructure as code", "Serverless architecture", "DevOps implementation"],
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "Cybersecurity",
      shortDesc: "Protect your business from threats",
      longDesc:
        "We help organizations strengthen their security posture with comprehensive cybersecurity services. Our team identifies vulnerabilities and implements robust security measures to protect your valuable data.",
      features: ["Security assessments", "Penetration testing", "Compliance consulting", "Security awareness training"],
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
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
    <div className="container mx-auto px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600">
            We offer a comprehensive range of services to help your business thrive in the digital landscape. Explore
            our offerings below.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 ${
                activeService === index ? "border-orange-500" : "border-transparent"
              }`}
              onClick={() => setActiveService(activeService === index ? null : index)}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.shortDesc}</p>
                  </div>
                </div>
                <motion.div animate={{ rotate: activeService === index ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronRight className="h-5 w-5 text-orange-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {activeService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <p className="text-gray-600 mb-4">{service.longDesc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
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
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="max-w-2xl mx-auto mb-6">
            We understand that every business is unique. Contact us to discuss your specific requirements and how we can
            tailor our services to meet your needs.
          </p>
          <motion.button
            className="px-6 py-3 bg-white text-orange-500 font-medium rounded-md hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
