import { skills } from "../constants/skillsData.tsx";
import { motion} from "framer-motion";
import {SkillCard} from "./SkillCard.tsx";
import type {JSX} from 'react'
export const SkillCards = ():JSX.Element => {
    return (
        <div className="max-w-7xl relative w-full h-full z-15 px-6 lg:px-3 py-15">
            <motion.h2 
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:text-6xl text-5xl text-white font-bold tracking-wide z-20"
            >
                Skills & Technologies:
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 py-32 justify-center place-items-center z-20">
                {skills.map((item,index)=>(
                    <SkillCard
                        key={index}
                        index={index}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}
 