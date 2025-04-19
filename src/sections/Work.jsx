import ProjectCards from "../components/ProjectCards";
const Work = ({ sectionRef,mobile }) => {
    return (
        <section ref = {sectionRef} id="projects" className="relative w-full h-max lg:h-screen flex items-center justify-center overflow-hidden">
            <ProjectCards mobile={mobile}/>
        </section>
    );
}
 
export default Work;