// import Navbar from "./Components/Navbar/Navbar"
// import Hero from "./Components/Hero/Hero"
// import About from "./Pages/About/About"
// import Skills from "./Pages/Skills/Skills"
// import Projects from "./Pages/Projects/Projects"
// import Certifications from "./Pages/Certifications/Certifications"
// import Contact from "./Pages/Contact/Contact"
// import Footer from "./Components/Footer/Footer"

// export default function Page() {
//   return (
//     <main className="scroll-smooth">
//       <Navbar />
//       <section id="home" className="scroll-mt-20">
//         <Hero />
//       </section>
//       <section id="about" className="scroll-mt-20">
//         <About />
//       </section>
//       <section id="skills" className="scroll-mt-20">
//         <Skills />
//       </section>
//       <section id="projects" className="scroll-mt-20">
//         <Projects />
//       </section>
//       <section id="certifications" className="scroll-mt-20">
//         <Certifications />
//       </section>
//       <section id="contact" className="scroll-mt-20">
//         <Contact />
//       </section>
//       <Footer />
//     </main>
//   )
// }
















import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Pages/About/About"
import Skills from "./Pages/Skills/Skills"
import Projects from "./Pages/Projects/Projects"
import Certifications from "./Pages/Certifications/Certifications"
import Contact from "./Pages/Contact/Contact"
import Footer from "./Components/Footer/Footer"

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="certifications" className="scroll-mt-20">
        <Certifications />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
