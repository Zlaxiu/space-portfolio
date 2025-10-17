import {SkillCards} from "../components/SkillCards";
import {Planet} from "../components/Planet"
import type {JSX} from 'react'
interface SkillsProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}
export const Skills = ({sectionRef}:SkillsProps):JSX.Element => {
    return (
        <section ref = {sectionRef} id="skills" className="py-20 relative w-full h-max lg:h-screen flex items-center justify-center overflow-hidden">
            <SkillCards/>
                <Planet ktora={2} className="top-10 right-[-100px] md:top-10 md:right-15"/>
        </section>
    );
}
 