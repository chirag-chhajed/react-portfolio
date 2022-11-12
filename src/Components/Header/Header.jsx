import React,{useState,useEffect,useContext} from "react";
import Sidebar from "./Sidebar";
import Themes from "./Themes";
import Navbar from "./Navbar";
import { Context } from "../../../context/Context";

export default function Header(){
    const {darkLogo,setDarkLogo,toggleLogo} = useContext(Context)
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",watchWidth)
        return function(){
            window.removeEventListener("resize",watchWidth)
        }
    })
    
    
    const [sidebar,setSidebar] = useState(false)
    const hamburgerIcon = sidebar ? "ri-close-line ri-2x" : "ri-menu-line ri-2x"
    const navbar = windowWidth >= 640 ? <Navbar/> : <i className={hamburgerIcon} onClick={()=>setSidebar(!sidebar)}></i>
    return(
        <>
        <header>
            <div className="logo">
                C
            </div>
            <Themes/>
            <div className="navbar">
                {navbar}
            </div>
            
            
        </header>
        {sidebar && <Sidebar/>}
        </>
    )
}