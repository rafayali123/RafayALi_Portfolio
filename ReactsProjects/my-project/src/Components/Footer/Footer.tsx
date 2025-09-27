"use client"
import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaRocket,
} from "react-icons/fa"

const Footer = () => {
  // Animated stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
  }))

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
  }))

  // Real working social links - Your actual profiles
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/rafayali123",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/syed-abdul-rafay-ali-8272b12a8/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/rafayali",
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/rafayyyy_12/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
  ]

  // Navigation links - These will scroll to sections on the same page
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  // Contact information with working links
  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "rafay8924@gmail.com",
      href: "mailto:rafay8924@gmail.com",
    },
    {
      icon: FaPhone,
      text: "+92 312 1255002",
      href: "tel:+923121255002",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Karachi, Pakistan",
      href: "https://maps.google.com/?q=Karachi,Pakistan",
    },
  ]

  // Fixed smooth scroll function
  const handleSmoothScroll = (event, targetHref) => {
    if (targetHref && targetHref.startsWith("#")) {
      event.preventDefault()
      const element = document.querySelector(targetHref)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-2 text-center sm:text-left"
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Rafay Ali
            </motion.h3>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              I'm a passionate Software Engineer and MERN Stack Developer who turns ideas into elegant code. Focused on building clean, scalable, and performant web applications.
            </p>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm text-gray-400">
              <FaRocket className="text-purple-400" />
              <span>Building the future, one line of code at a time</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center sm:justify-start group cursor-pointer text-sm sm:text-base"
                  >
                    <motion.span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mr-2 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li key={index}>
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center justify-center sm:justify-start group"
                  >
                    <info.icon className="mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm break-all sm:break-normal">{info.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${social.color} transition-all duration-300 p-2 sm:p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/25`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={16} className="sm:w-5 sm:h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-6 sm:pt-8 text-center"
        >
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center">
              &copy; 2025 Rafay Ali. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="mx-1"
              >
                <FaHeart className="text-red-400" />
              </motion.span>
              and lots of coffee
            </p>
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
              <a href="#privacy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#sitemap" className="hover:text-purple-400 transition-colors hidden sm:inline">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs text-purple-300"
        animate={{
          y: [-5, 5, -5],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        ✨ Available for hire
      </motion.div>
    </footer>
  )
}

export default Footer
