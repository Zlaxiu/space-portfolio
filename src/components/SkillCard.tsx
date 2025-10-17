import { motion } from "framer-motion";
import { useState } from "react";
import type { Skill } from "../constants/skillsData";
import type {JSX} from 'react'
type ColorKey =
  | "orange-500"
  | "blue-600"
  | "yellow-400"
  | "cyan-400"
  | "sky-400"
  | "white"
  | "purple-400"
  | "pink-500"
  | "orange-600"
  | "blue-800"
  | "blue-500";

const colorMap: Record<ColorKey, string> = {
  "orange-500": "rgba(249, 115, 22, 0.5)",
  "blue-600": "rgba(37, 99, 235, 0.5)",
  "yellow-400": "rgba(250, 204, 21, 0.5)",
  "cyan-400": "rgba(34, 211, 238, 0.5)",
  "sky-400": "rgba(56, 189, 248, 0.5)",
  "white": "rgba(255, 255, 255, 0.4)",
  "purple-400": "rgba(192, 132, 252, 0.5)",
  "pink-500": "rgba(236, 72, 153, 0.5)",
  "orange-600": "rgba(241, 80, 47, 0.5)",
  "blue-800": "rgba(0, 30, 54, 0.5)",
  "blue-500": "rgba(43, 127, 255, 1)"
};

interface SkillCardProps extends Skill{
    index:number
}
export const SkillCard = ({icon, label, description, index}:SkillCardProps):JSX.Element => {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            className="relative w-25 h-25 "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay:.5 + index * 0.1 }}
            viewport={{ once: true }} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            <motion.div
                style={{
                    boxShadow: hovered
                    ? `0 0 25px ${colorMap[icon.props.className.replace("text-", "") as ColorKey]}`: "none"
                }}
                className={`relative w-25 h-25 border-1 border-white/10 rounded-xl flex justify-center items-center
                     flex-col bg-[#303b4d]  transition-all duration-300 cursor-default`}
                animate={{
                    scale: [1,1.05,1],
                    translateY: [0,-30,0],
                    rotateX:[0,10,0]
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    times: [1],
                    repeat: Infinity
                }}
            >
                <div className="text-4xl mb-2">{icon}</div>
                <span className="text-sm font-medium">{label}</span>
            </motion.div>
            {hovered && (
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-[-32px] text-xs text-center bg-black/60 text-white px-3 py-1 rounded-lg w-40 shadow-md z-50"
                >
                    {description}
                </motion.div>
            )}
        </motion.div>
    );
}
 
