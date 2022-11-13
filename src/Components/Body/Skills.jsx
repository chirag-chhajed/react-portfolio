
export default function Skills(props){
    const {id,img} = props
    return(
        <div key={id} className="image">
            <img src={img} alt="logo" />
            <div className="image-bg"></div>    
        </div>
    )
}
// import image from "../../../public/assets/HTML.png"