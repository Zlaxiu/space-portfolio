import { motion} from "framer-motion";
import {Astronaut} from "../components/Astronaut";
import {Planet} from "../components/Planet";
import gitHubLogo from '../assets/github-mark-white.svg'
import type {JSX} from 'react'
interface HeroProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}
export const Hero = ({sectionRef}:HeroProps):JSX.Element =>{
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-max lg:h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >

      <Planet ktora={0} className="scale-75 lg:scale-100"/>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 mt-36 lg:mt-15 flex flex-col md:flex-row  justify-between gap-12">
        <div className="text-white max-w-xl relative lg:my-auto lg:mr-60">
          <motion.h1
            className="text-7xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">Bartek</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-3xl text-gray-300 max-w-60 md:max-w-96"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Front-end Developer crafting interactive & visual web experiences.
          </motion.p>

          <motion.div
            className="mt-6 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://github.com/Zlaxiu" className="ml-5 bg-gradient-to-r from-purple-400 to-pink-500 hover:bg-cyan-400 text-white rounded-full font-semibold transition-all duration-300">
              <img src={gitHubLogo} className="h-10 w-10" alt="github-logo"/>
            </a>
            
          </motion.div>
        </div>


        <div className="relative w-[320px] md:w-[500px] aspect-square z-10 translate-y-[-100px] md:translate-y-[0]">
          <Astronaut ktory={0}/>          
        </div>
      </div>
      <div className="absolute bottom-0 lg:bottom-10 w-full flex justify-center items-center cursor-pointer" onClick={()=>window.history.replaceState(null, "", `#projects`)}>
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/80 flex justify-center items-start p-2">
          <motion.div
            animate={{y:[0,24,0]}}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:"loop"
            }}
            className="w-4 h-4 rounded-full bg-white/90"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
