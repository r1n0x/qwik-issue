import {useState} from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import SugarProvider from "../../SugarProvider";

export function App() {
    const [count, setCount] = useState(0)
    const spoon = SugarProvider.getSpoon();
    return (
        <>
            {spoon}
        </>
    )
}
