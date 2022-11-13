export default function ProjectCard(props){
    const {image,id,github,deployed} = props
    return(
        <>
            <div key={id} className="project-card">
                <div className="project-image">
                    <img src={image} alt="image" />
                </div>
                <div>
                    <a href={github}>GitHub</a>
                    <a href={deployed}>Deployed</a>
                </div>
            </div>
        </>
    )
}