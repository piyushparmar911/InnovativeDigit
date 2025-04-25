"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <motion.footer
      className="relative pt-16 pb-8 overflow-hidden text-white bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 bg-orange-500 rounded-full w-80 h-80 opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 bg-orange-400 rounded-full w-60 h-60 opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500">DevXdiscovery</h3>
            <p className="text-gray-400">
              Providing innovative solutions for modern challenges. We help businesses grow and succeed in the digital
              age.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-800 rounded-full hover:bg-orange-500"
                  aria-label={`Follow us on ${social}`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1 + 0.2 },
                    }),
                  }}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#hero" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.05 + 0.2 },
                    }),
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                  >
                    <motion.span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" whileHover={{ scale: 1.5 }} />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Digital Marketing",
                "Mobile App Development",
                "Cloud Solutions",
                "Cybersecurity",
                "IT Consulting",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.05 + 0.2 },
                    }),
                  }}
                >
                  <Link
                    href="#services"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                  >
                    <motion.span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" whileHover={{ scale: 1.5 }} />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="space-y-3">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mt-0.5 mr-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </motion.div>
                <span className="text-gray-400">jamnagar, Kudrat residency</span>
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ x: 5 }}>
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mr-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                </motion.div>
                <span className="text-gray-400">+91 98987 24247</span>
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ x: 5 }}>
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mr-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                </motion.div>
                <span className="text-gray-400">info@Devxdiscovery.com</span>
              </motion.li>
            </ul>
            <div className="pt-2">
              <motion.button
                className="relative px-4 py-2 overflow-hidden text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 w-0 bg-white opacity-20"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div className="pt-8 border-t border-gray-800" variants={itemVariants}>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.p
              className="text-sm text-gray-400"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              &copy; {currentYear} DevXdiscovery All rights reserved.
            </motion.p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.1 + 0.5 },
                      }),
                    }}
                  >
                    <Link href="#" className="text-sm text-gray-400 hover:text-orange-500">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
