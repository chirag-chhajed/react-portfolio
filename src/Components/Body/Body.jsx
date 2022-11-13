import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact"
import Skills from "./Skills";
import {nanoid} from 'nanoid'

export default function Body(){
    return(
        <>
            <About/>
            <section id="skills">
                <Skills
                    img={"/assets/HTML.png"} 
                    id={nanoid()}
                />
                <Skills
                    img={"/assets/CSS.png"} 
                    id={nanoid()}
                />
                <Skills
                    img={"/assets/javascript.svg"} 
                    id={nanoid()}
                />
                <Skills
                    img={"/assets/react.png"} 
                    id={nanoid()}
                />
                <Skills
                    img={"/assets/tailwind.png"} 
                    id={nanoid()}
                />
            </section>
            <Projects/>
            <Contact/>
            
        </>
    )
}