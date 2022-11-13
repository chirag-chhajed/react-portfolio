import ProjectCard from "./ProjectCard"
import cardData from "../../data/cardData"
console.log(cardData)
export default function Projects(){
    const cards = cardData.map(e => (
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