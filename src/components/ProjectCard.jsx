import { motion} from "framer-motion";

const ProjectCard = (props) => {
    return (  
        <motion.div
            onClick={()=>window.open(props.link, "_blank")}
            className="shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:ring-2 hover:ring-cyan-400/50 hover:scale-105 backdrop-blur-md bg-white/10 rounded-2xl p-5 flex flex-col gap-4 relative h-max cursor-pointer z-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8,delay:props.mobile ? 0 :0.2 + props.karta * 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
        >   
            <img className="w-full object-cover h-50 rounded-t-xl" src={props.img}/>
            <h3 className="text-white text-xl font-semibold">{props.title}</h3>
            <p className="text-sm text-white/80">{props.description}</p>
            <div>
                <ul className="flex flex-row gap-3">
                    {props.tech.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
 
export default ProjectCard;