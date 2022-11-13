export default function ProjectCard(props){
    const {img,id,github,deployed} = props
    return(
        <>
            <div key={id} className="project-card">
                <div className="project-image">
                    <img src={img} alt="image" />
                </div>
                <div>
                    <a href={github}>GitHub</a>
                    <a href={deployed}>Deployed</a>
                </div>
            </div>
        </>
    )
}