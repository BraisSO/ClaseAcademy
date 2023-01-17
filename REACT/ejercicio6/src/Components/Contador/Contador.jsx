import { useState } from "react";
import './Contador.css'


export default function Contador() {

    const [counter, setCounter] = useState(0)

    let handleAumentar = () => {
        setCounter(counter + 1);
    }

    let handleDisminuir = () => {
        setCounter(counter - 1);
    }

    let handleReset = () => {
        setCounter(0);
    }



    return (

        <div>
            <h1>
                {counter}
            </h1>

            <button onClick={handleAumentar}>Aumentar</button>
            <button onClick={handleDisminuir}>Disminuir</button>
            <button onClick={handleReset}>Reset</button>

        </div>


    )
}
