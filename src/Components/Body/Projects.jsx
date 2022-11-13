import ProjectCard from "./ProjectCard"
import data from "../../data/cardData"
export default function Projects(){
    const cards = data.map(e => (
        <ProjectCard
            {...e}
        />
    ))
    return(
        <section id="projects">
            <h2>Projects</h2>
            <main className="cards">
                {cards}
            </main>
        </section>
    )
}