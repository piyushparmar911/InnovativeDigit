"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <motion.div className="text-2xl font-bold text-orange-500" whileHover={{ scale: 1.05 }}>
          <Link href="/">DevXdiscovery</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
        {["hero", "about", "services", "contact"].map((section) => {
  const label =
    section === "hero"
      ? "Home"
      : section === "about"
      ? "About Us"
      : section.charAt(0).toUpperCase() + section.slice(1)
  return (
    <button
      key={section}
      onClick={() => scrollToSection(section)}
      className={`relative font-medium transition-colors ${
        activeSection === section ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
      }`}
    >
      {label}
      {activeSection === section && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
          layoutId="activeSection"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  )
})}

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-600 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white md:hidden"
          >
            <div className="container flex flex-col px-4 py-4 mx-auto space-y-4">
            {["hero", "about", "services", "contact"].map((section) => {
  const label =
    section === "hero"
      ? "Home"
      : section === "about"
      ? "About Us"
      : section.charAt(0).toUpperCase() + section.slice(1)
  return (
    <button
      key={section}
      onClick={() => scrollToSection(section)}
      className={`relative font-medium transition-colors ${
        activeSection === section ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
      }`}
    >
      {label}
      {activeSection === section && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
          layoutId="activeSection"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  )
})}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Import AnimatePresence at the top
import { AnimatePresence } from "framer-motion"
