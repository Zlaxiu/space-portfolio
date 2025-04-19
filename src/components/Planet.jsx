import p1  from "../assets/planeta.png"
import p2  from "../assets/planet2.png"
import p3  from "../assets/planet3.png"

import { motion } from "framer-motion"

const planety =[p1,p2,p3]

const Planet = ({ktora,className = ""}) => {

    return (  
        <motion.div
        className={`absolute z-9 ${className}`}

        initial={{ scale: 0.1 }}
        animate={{ scale: [0.95, 1.05, 0.95]}}
        transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity
        }}
        >
            <img
                className="h-full w-full object-contain blur-[2px] scale-70 "
                src={planety[ktora]}
            />
        </motion.div>
    );
}
 
export default Planet;