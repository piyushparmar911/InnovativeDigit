"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "bg-white/90 shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <motion.div 
          className="text-2xl font-bold text-orange-500" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <div className="relative w-auto h-12">
              <Image 
                src="/logo.jpg?height=50&width=200" 
                alt="DevXdiscovery" 
                width={200} 
                height={50} 
                className="object-contain"
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {["hero", "about", "services", "contact"].map((section, i) => {
            const label =
              section === "hero"
                ? "Home"
                : section === "about"
                ? "About Us"
                : section.charAt(0).toUpperCase() + section.slice(1)
            return (
              <motion.button
                key={section}
                custom={i}
                variants={menuItemVariants}
                onClick={() => scrollToSection(section)}
                className={`relative font-medium transition-colors ${
                  activeSection === section ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
                {activeSection === section && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="text-gray-600 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-sm"
          >
            <div className="container flex flex-col px-4 py-4 mx-auto space-y-4">
              {["hero", "about", "services", "contact"].map((section, i) => {
                const label =
                  section === "hero"
                    ? "Home"
                    : section === "about"
                    ? "About Us"
                    : section.charAt(0).toUpperCase() + section.slice(1)
                return (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(section)}
                    className={`py-2 px-4 text-left rounded-md ${
                      activeSection === section ? "bg-orange-100 text-orange-500" : "text-gray-600 hover:bg-orange-50"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {label}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
