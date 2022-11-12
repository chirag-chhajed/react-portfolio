import { useContext } from "react"
import { Context } from "../../../context/Context"

export default function Themes(){
    const {darkLogo,setDarkLogo,toggleLogo} = useContext(Context)
    // const lightThemeClass = darkLogo ? "":"none"
    // const darkThemeClass = !darkLogo ? "":"none"
    return(
        <div className="themes">
            <form >
                <div>
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="red" defaultChecked />
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="blue" />
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="green" />
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="yellow" />
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="pink" />
                    <label htmlFor="theme"></label>
                </div>
                <div>
                    <input name="theme" type="radio" id="dark-red"/>
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="dark-blue"/>
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="dark-green"/>
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="dark-yellow"/>
                    <label htmlFor="theme"></label>
                    <input name="theme" type="radio" id="dark-pink"/>
                </div>
            </form>
        </div>
    )
}