import { motion } from "framer-motion";
import {about} from "../constants/index"
import {Astronaut} from "../components/Astronaut";
import type {JSX} from 'react'
interface AboutProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}
export const About = ({ sectionRef }:AboutProps):JSX.Element => {
    return (
        <section ref = {sectionRef} id="about" className="relative w-full h-max lg:h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl relative z-10 px-6 lg:px-12 text-white flex md:flex-row flex-col">
                <div className="w-full xl:w-1/2 z-10">
                    <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl font-bold mb-6"
                    >
                    About Me
                    </motion.h2>

                    <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl leading-relaxed backdrop-blur-md bg-white/5 p-6 rounded-2xl shadow-xl border border-white/10"
                    >
                    {about}
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0.5, y: 30, scale: 0.2 }}
                    whileInView={{ opacity: 1, y: 0, scale:1 }}
                    transition={{ duration: 1, delay: 0.2 }} className="w-full md:w-1/2 z-10 relative hidden xl:block">
                    <Astronaut ktory={1} className="w-[600px]"/>
                </motion.div>
            </div>

        </section>
    );
}
 