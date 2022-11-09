import React,{useState} from "react";
import Sidebar from "./Sidebar";

export default function Header(){
    const [sidebar,setSidebar] = useState(false)
    return(
        <>
        <header>
            <img src="/11.png" alt="logo"  />
            <div className="hamburger-icon" onClick={()=>setSidebar(!sidebar)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* <nav>

            </nav> */}
        </header>
        {sidebar && <Sidebar/>}
        </>
    )
}