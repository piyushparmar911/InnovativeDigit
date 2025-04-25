"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useForm } from "react-hook-form"
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", data)
      setSubmitStatus("success")
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
      title: "Our Location",
      details: "jamnagar , Kudrat residency",
    },
    {
      icon: <Phone className="w-5 h-5 text-orange-500" />,
      title: "Phone Number",
      details: "+91 98987 24247",
    },
    {
      icon: <Mail className="w-5 h-5 text-orange-500" />,
      title: "Email Address",
      details: "info@infosite.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM",
    },
  ]

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
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-600">
            Have questions or ready to start your project? Get in touch with our team and we'll get back to you as soon
            as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-1">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Get In Touch</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 mr-4 bg-orange-100 rounded-full">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg bg-orange-50">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Connect With Us</h3>
              <p className="mb-4 text-gray-600">
                Follow us on social media to stay updated with our latest news and announcements.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 transition-colors bg-white rounded-full shadow-sm hover:bg-orange-100"
                    aria-label={`Follow us on ${social}`}
                  >
                    <div className="w-5 h-5 bg-orange-500 rounded-full" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-xl font-bold text-gray-800">Send Us a Message</h3>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 mb-6 text-green-700 rounded-md bg-green-50"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Your message has been sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 mb-6 text-red-700 rounded-md bg-red-50"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>There was an error sending your message. Please try again later.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91 12345 45676"
                      {...register("phone")}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Project Inquiry"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="px-6 py-3 font-medium text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600 disabled:opacity-70"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          {/* This would be replaced with an actual map component in a real implementation */}
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-2 text-orange-500" />
              <p className="text-gray-600">Interactive Map Would Be Here</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
