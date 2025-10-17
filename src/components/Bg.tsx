import { motion } from "framer-motion"
import type {JSX} from 'react'
import type {Section} from "../App" 

type BgProps = {
    activeSection: Section;
}

const gradientMap:Record<Section, string> = {
    0: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
    Projects: "from-[#0a1b3d ] via-[#0077be] to-[#0a1b3d]",
    Skills: "from-[#0d1b2a] via-[#1b263b] to-[#415a77]",
    About:"from-[#1f0f3a] via-[#5c2a9d] to-[#1f0f3a]",
    Contact:"from-[#2A7B9B] via-[#57C785] to-[#EDDD53"

  };

export const Bg = ({activeSection}:BgProps):JSX.Element=> {
    const gradient = gradientMap[activeSection] || gradientMap[0];
    return (  
        <motion.div 
        className={`fixed inset-0 bg-gradient-to-br ${gradient} transition-colors duration-500 z-0`} />
    );
}
 
