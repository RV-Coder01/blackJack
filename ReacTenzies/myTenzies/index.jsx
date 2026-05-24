import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./components/App"

const root = createRoot(document.getElementById('root'))

export default function Index(){
    return(
        <App />
    )
}

root.render(<Index/>)