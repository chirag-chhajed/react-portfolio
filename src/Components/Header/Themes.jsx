export default function Themes(){
    return(
        <div className="themes">
            <form>
                <label htmlFor="light"></label>
                <input name="light" type="radio" id="red" defaultChecked />
                <label htmlFor="light"></label>
                <input name="light" type="radio" id="blue" />
                <label htmlFor="light"></label>
                <input name="light" type="radio" id="green" />
                <label htmlFor="light"></label>
                <input name="light" type="radio" id="yellow" />
                <label htmlFor="light"></label>
                <input name="light" type="radio" id="pink" />
            </form>
            <form>
                <label htmlFor="dark"></label>
                <input checked name="dark" type="radio" />
                <label htmlFor="dark"></label>
                <input name="dark" type="radio" />
                <label htmlFor="dark"></label>
                <input name="dark" type="radio" />
                <label htmlFor="dark"></label>
                <input name="dark" type="radio" />
                <label htmlFor="dark"></label>
                <input name="dark" type="radio" />
            </form>
        </div>
    )
}