import {ProjectCards} from "../components/ProjectCards";
import type {JSX} from 'react'
import type {Section} from "../App" 
export interface WorkProps{
    sectionRef: React.RefObject<HTMLDivElement | null>;
    mobile: boolean;
    activeSection: Section
}
export const Work = ({ sectionRef,mobile,activeSection}: WorkProps):JSX.Element => {
    return (
        <section ref = {sectionRef} id="projects" className="relative w-full h-max lg:h-screen flex items-center justify-center overflow-hidden">
            <ProjectCards mobile={mobile} activeSection={activeSection}/>
        </section>
    );
}
 
