import { motion } from "framer-motion";
import rocketImg from "../assets/rocket.png"
import type {JSX} from 'react'

export const Rocket = ():JSX.Element => {
  return (
    <motion.img
      src={rocketImg}
      alt="rocket"
      className="absolute top-[40%] left-[-150px] w-[150px] z-50"
      initial={{ x: -200, opacity: 0.7 }}
      whileInView={{ x: "100vw", opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true}}
    />
  );
};
