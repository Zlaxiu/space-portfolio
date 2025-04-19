import SkillCards from "../components/SkillCards";
import Planet from "../components/Planet"
import Astronaut from "../components/Astronaut";
const Skills = ({ sectionRef }) => {
    return (
        <section ref = {sectionRef} id="skills" className="py-20 relative w-full h-max md:h-screen flex items-center justify-center overflow-hidden">
            <SkillCards/>
                <Planet ktora={2} className="top-10 right-[-100px] md:top-10 md:right-15"/>
                {/* <Astronaut ktory={1} className="w-[150px] md:w-[250px] aspect-square left-[0px] bottom-40 md:bottom-[100px] md:left-[50px] none"/> */}

        </section>
    );
}
 
export default Skills;