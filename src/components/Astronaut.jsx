import astro1  from "../assets/astronaut.png"
import astro2  from "../assets/astronaut2.png"

import { motion} from "framer-motion"
const Astronaut = ({ktory, className = ""}) => {
const astronauts =[astro1,astro2]
    return (  
        <motion.div
        style={{
            translateX:50
        }}
        className={`absolute z-9 ${className}`}
        initial={{scale:[0.01],x:0,y:0}}

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
            <img
                className="h-full w-full object-contain scale-110"
                src={astronauts[ktory]}
            />
        </motion.div>
    );
}
 
export default Astronaut;