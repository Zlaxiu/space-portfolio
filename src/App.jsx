import Hero from './sections/Hero';
import Work from './sections/Work';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Navbar from './components/Navbar'
import Bg from './components/Bg';
import Progress from './components/Progress'
import Particle from './components/Particle';
import { BrowserRouter } from 'react-router-dom';
import { useState, useRef,useEffect } from 'react';
import { useInView } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const isMobile = window.innerWidth < 768;

  const heroRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsInView = useInView(skillsRef, { amount: isMobile ? 0.2 : 0.6 });
  const heroInView = useInView(heroRef, { amount: 0.6 });
  const workInView = useInView(workRef, { amount: isMobile ? 0.2 : 0.6 });
  const aboutInView = useInView(aboutRef, { amount: 0.6 });
  const contactInView = useInView(contactRef, { amount: isMobile ? 0.2 : 0.6 });

  useEffect(() => {
    if (heroInView) setActiveSection(0);
    else if (workInView) setActiveSection("Projects")
    else if (skillsInView) setActiveSection("Skills");
    else if (aboutInView) setActiveSection("About");
    else if (contactInView) setActiveSection("Contact");

  }, [ workInView, heroInView, skillsInView, aboutInView, contactInView]);
  // console.log(activeSection)
  useEffect(() => {
    activeSection === 0 ? window.history.replaceState(null, "", `/`) : window.history.replaceState(null, "", `#${activeSection[0].toLowerCase() + activeSection.slice(1) }`);
  }, [activeSection]);
  return (
    <BrowserRouter>
      <Bg activeSection = {activeSection}/>
      <Particle/>
      <Progress/>
      <Navbar activeSection = {activeSection}/>
      <Hero sectionRef={heroRef}/>
      <Work sectionRef={workRef} mobile={isMobile}/>
      <Skills sectionRef={skillsRef}/>
      <About sectionRef={aboutRef}/>
      <Contact sectionRef={contactRef}/>
    </BrowserRouter>
  )
  
}

export default App
