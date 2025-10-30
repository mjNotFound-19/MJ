import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectF1 from './components/ProjectF1'
import Experience from './components/Experience'
import SkillList from './components/SkillList'
import ContactIcons from './components/ContactIcons'
import Footer from './components/Footer'
import SpotlightCursor from "./SpotlightCursor"
import Certifications from "./components/Certifications"

export default function App() {
  return (
    <div className="relative bg-secondary text-textLight min-h-screen overflow-hidden">
      {/* Always-on custom neon cursor */}
      <SpotlightCursor 
        size={14} 
        color="rgba(0, 180, 255, 0.9)" 
        glow="0 0 12px rgba(0, 180, 255, 0.8)" 
      />

      <Nav />
      <Hero />

      <Section id="projects" title="Projects" subtitle="Selected work across AI/ML and F1 analytics">
        <ProjectF1 />
      </Section>

      <Section id="experience" title="Experience" subtitle="Professional roles & impact">
        <Experience />
      </Section>

      <Section id="skills" title="Skills" subtitle="Practical tools and technologies I use">
        <SkillList />
      </Section>

      {/* ?? New Certifications Section */}
      <Section id="certifications" title="Certifications" subtitle="Verified credentials and achievements">
        <Certifications />
      </Section>

      <Section id="contact" title="Contact" subtitle="Let's connect">
        <ContactIcons />
      </Section>

      <Footer />
    </div>
  )
}

