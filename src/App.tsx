import {Hero} from './sections/Hero';
import {Work} from './sections/Work';
import {Skills} from './sections/Skills';
import {About} from './sections/About';
import {Contact} from './sections/Contact';
import {Navbar} from './components/Navbar'
import {Bg} from './components/Bg';
import {Progress} from './components/Progress'
import Particle from './components/Particle';
import { BrowserRouter } from 'react-router-dom';
import { useState, useRef,useEffect } from 'react';
import { useInView } from 'framer-motion';
import type {JSX} from 'react'
export type Section = number | "Projects" | "Skills" | "About" | "Contact"
const App = ():JSX.Element => {
  const [activeSection, setActiveSection] = useState<Section>(0);
  const isMobile:boolean = window.innerWidth < 768;

  const heroRef = useRef<HTMLDivElement|null>(null);
  const workRef = useRef<HTMLDivElement|null>(null);
  const skillsRef = useRef<HTMLDivElement|null>(null);
  const aboutRef = useRef<HTMLDivElement|null>(null);
  const contactRef = useRef<HTMLDivElement|null>(null);

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
    (typeof activeSection === "number") ? window.history.replaceState(null, "", `/`) : window.history.replaceState(null, "", `#${activeSection[0].toLowerCase() + activeSection.slice(1) }`);
  }, [activeSection]);
  return (
    <BrowserRouter>
      <Bg activeSection = {activeSection}/>
      <Particle/>
      <Progress/>
      <Navbar activeSection = {activeSection}/>
      <Hero sectionRef={heroRef}/>
      <Work sectionRef={workRef} mobile={isMobile} activeSection = {activeSection}/>
      <Skills sectionRef={skillsRef}/>
      <About sectionRef={aboutRef}/>
      <Contact sectionRef={contactRef}/>
    </BrowserRouter>
  )
  
}

export default App
