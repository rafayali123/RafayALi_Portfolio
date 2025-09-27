"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 md:px-20 bg-black text-white overflow-hidden">
      {/* Animated Stars Background - Same as Hero */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0%", "100%"] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: Math.random() * 10 + 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Background Gradient - Same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-blue-900 opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Hi! I'm <span className="text-purple-400 font-semibold">Syed Abdul Rafay Ali</span>, a passionate
              full-stack developer exploring the{" "}
              <span className="text-pink-400 font-semibold">universe of code & creativity</span> 🌌
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              I love building interactive, futuristic, and responsive web applications that push the boundaries of
              what's possible on the web. My journey in software development is driven by curiosity, innovation, and a
              desire to create meaningful digital experiences.
            </p>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Technical Universe
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Mastery",
                  skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
                  icon: "🎨",
                },
                {
                  title: "Backend Power",
                  skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "API Development"],
                  icon: "⚡",
                },
                {
                  title: "Full-Stack Magic",
                  skills: ["MERN Stack", "Authentication", "Database Design", "Deployment", "Version Control"],
                  icon: "🚀",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(128,0,255,0.3)]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4 text-center">{category.icon}</div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4 text-center">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-300 text-center">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Info Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              {
                title: "🎓 Education",
                content: "Bachelor's in Software Engineering from Sir Syed University Of Engineering & Technology",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "💼 Experience",
                content:
                  "Worked on multiple full-stack projects including eCommerce platforms, CRUD applications, and modern web solutions with focus on user experience and performance optimization",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                title: "🎯 Passion Projects",
                content:
                  "Building innovative web applications, contributing to open-source projects, and exploring cutting-edge technologies like AI integration and modern web frameworks",
                gradient: "from-pink-500 to-purple-500",
              },
              {
                title: "🎮 Beyond Code",
                content:
                  "Designing modern interfaces, exploring new technologies, gaming, and staying updated with the latest trends in web development and UI/UX design",
                gradient: "from-purple-500 to-blue-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(128,0,255,0.2)" }}
              >
                <h4
                  className={`text-xl font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}
                >
                  {item.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Achievement Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              "🌟 Full-Stack Developer",
              "🚀 React Enthusiast",
              "💡 Problem Solver",
              "🎨 UI/UX Focused",
              "⚡ Performance Optimizer",
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 text-purple-300 font-medium"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(128,0,255,0.4)" }}
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              Ready to embark on a coding journey together? Let's create something amazing! 🌟
            </p>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(128,0,255,0.5)] transition-all duration-300"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-400 font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
