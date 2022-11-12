import { createContext,useState} from "react";

const Context = createContext()

function ContextProvider({children}){
    const [darkLogo,setDarkLogo] = useState(false)
    const toggleLogo = darkLogo ? "ri-moon-line ri-2x" : "ri-sun-line ri-2x"


    return(
        <Context.Provider value={{darkLogo,setDarkLogo,toggleLogo}}>
            {children}
        </Context.Provider>
    )
}

export {Context,ContextProvider}