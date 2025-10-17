import { motion} from "framer-motion";
import type {Project} from "../constants/index"
import type {JSX} from 'react'
interface ProjectCardProps extends Project{
    moreThan3:[number, boolean]
    mobile: boolean
    karta: number
}
export const ProjectCard = ({link, moreThan3, mobile, karta, img, description, title, tech}:ProjectCardProps):JSX.Element => {
    return (  
        <motion.div
            onClick={()=>window.open(link, "_blank")}
            className={moreThan3[1] ? `hover:ring-2 hover:ring-cyan-400/50 hover:scale-105 backdrop-blur-md bg-white/10 rounded-2xl p-5 flex flex-col gap-4 relative h-[400px] cursor-pointer z-10` : `shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:ring-2 hover:ring-cyan-400/50 hover:scale-105 backdrop-blur-md bg-white/10 rounded-2xl p-5 flex flex-col gap-4 relative h-max cursor-pointer z-10`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8,delay:moreThan3[0] <= 2 ? (mobile ? 0 :0.2 + karta * 0.4) : 0, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
        >   
            <img className="w-full object-cover h-50 rounded-t-xl" src={img}/>
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="text-sm text-white/80">{description}</p>
            <div>
                <ul className="flex flex-row gap-3">
                    {tech.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
