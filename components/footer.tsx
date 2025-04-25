"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-orange-500">DevXdiscovery</h3>
            <p className="text-gray-400">
              Providing innovative solutions for modern challenges. We help businesses grow and succeed in the digital
              age.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-gray-800 rounded-full hover:bg-orange-500"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#hero" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Digital Marketing",
                "Mobile App Development",
                "Cloud Solutions",
                "Cybersecurity",
                "IT Consulting",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <span className="text-gray-400">jamnagar , Kudrat residency</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-gray-400">+91 98987 24247</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-gray-400">DevXdiscovery@discory.com</span>
              </li>
            </ul>
            <div className="pt-2">
              <button className="px-4 py-2 text-sm text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600">
                Get a Quote
              </button>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">&copy; {currentYear} DevXdiscovery All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-orange-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-orange-500">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
