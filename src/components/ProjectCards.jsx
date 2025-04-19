import ProjectCard from "./ProjectCard";
import {projects} from "../constants/index"
import Rocket from "./Rocket";
import Planet from "./Planet"
const ProjectCards = ({mobile}) => {

    return (  
        <div className="max-w-7xl relative w-full h-full py-20 z-10 px-6 lg:px-3">
            <Planet ktora={1}/>
            <h2 className="text-6xl font-bold text-white mb-10 z-10">Projects:</h2>
            <h3 className="relative md:text-2xl text-lg font-medium text-white mb-5 z-10">Each of these projects is a small universe of its own—designed to show how I tackle challenges, blend creativity with code, and bring ideas to life using a variety of technologies.</h3>
            <Rocket/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((item, i)=>(
                    <ProjectCard
                        key={item.id}
                        {...item}
                        karta = {i}
                        mobile={mobile}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default ProjectCards;