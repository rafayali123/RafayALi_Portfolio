"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    name: "Car E-Commerce Website",
    description: "Modern MERN stack e-commerce platform with React, Node.js & TailwindCSS.",
    fullDescription:
      "A comprehensive automotive e-commerce solution featuring advanced search filters, real-time inventory management, secure payment processing, and responsive design optimized for mobile and desktop experiences.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Stripe"],
    status: "Completed",
    category: "Full Stack",
    link: "#",
    image: "/modern-car-ecommerce-website-dashboard.png",
  },
  {
    name: "Scholar Link Manager",
    description: "Spring MVC CRUD project for managing educational resources.",
    fullDescription:
      "An educational resource management system built with Spring MVC architecture, featuring user authentication, resource categorization, advanced search capabilities, and collaborative learning tools.",
    tech: ["Spring MVC", "Java", "MySQL", "Bootstrap", "Thymeleaf"],
    status: "Completed",
    category: "Backend",
    link: "#",
    image: "/educational-resource-management-dashboard.png",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio with universe/futuristic theme and animations.",
    fullDescription:
      "A stunning personal portfolio website featuring cosmic animations, interactive elements, responsive design, and modern web technologies to showcase projects and skills in an engaging way.",
    tech: ["React", "Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    status: "In Progress",
    category: "Frontend",
    link: "#",
    image: "/futuristic-space-themed-portfolio-website.png",
  },
  {
    name: "TodoList App",
    description: "A simple TodoList application built with React and TypeScript.",
    fullDescription:
      "A feature-rich task management application with drag-and-drop functionality, priority levels, due dates, categories, local storage persistence, and a clean, intuitive user interface.",
    tech: ["React", "TypeScript", "Local Storage", "CSS3", "React DnD"],
    status: "Completed",
    category: "Frontend",
    link: "#",
    image: "/modern-todo-list-app-interface.png",
  },
]

const AnimatedStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 px-6 md:px-20 bg-black text-white overflow-hidden">
      <AnimatedStars />
      <FloatingParticles />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Explore my journey through code, creativity, and innovation
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <motion.div
                className="relative bg-black/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border border-green-400/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {project.status}
                  </motion.div>

                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-400/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    {project.category}
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <motion.h3
                    className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {project.name}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {hoveredProject === index ? project.fullDescription : project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full border border-purple-400/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: hoveredProject === index ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.a>
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16 gap-8 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { label: "Projects Completed", value: "15+" },
            { label: "Technologies Used", value: "20+" },
            { label: "Years Experience", value: "2+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
