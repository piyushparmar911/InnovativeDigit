"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from 'lucide-react'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import AnimatedCursor from "@/components/animated-cursor"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button after scrolling down 500px
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sections = ["hero", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <AnimatedCursor />
      <ParticleBackground />
      <Navbar activeSection={activeSection} />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="relative py-20">
          <div className="absolute top-0 left-0 z-10 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <AboutUs />
        </section>

        <section id="services" className="relative py-20 bg-orange-50">
          <div className="absolute top-0 left-0 z-10 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute right-0 w-40 h-40 bg-orange-300 rounded-full -top-10 opacity-20 blur-3xl"></div>
          <div className="absolute bg-orange-200 rounded-full bottom-10 left-10 w-60 h-60 opacity-20 blur-3xl"></div>
          <Services />
        </section>

        <section id="contact" className="relative py-20">
          <div className="absolute top-0 left-0 z-10 w-full h-20 bg-gradient-to-b from-orange-50 to-transparent"></div>
          <div className="absolute bg-orange-100 rounded-full top-1/4 right-1/4 w-72 h-72 opacity-30 blur-3xl"></div>
          <Contact />
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed z-50 p-3 text-white transition-colors bg-orange-500 rounded-full shadow-lg bottom-8 right-8 hover:bg-orange-600"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
