import { motion, useScroll } from "framer-motion"

const Progress = () => {
    const { scrollYProgress } = useScroll()
    return (  
        <motion.div
            id="scroll-indicator"
            className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 z-50"
            style={{
                scaleX: scrollYProgress,
                originX: 0,
            }}
        />
    );
}
 
export default Progress;