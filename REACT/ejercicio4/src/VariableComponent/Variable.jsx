import React from 'react'

let nombre = "Brais";
let apellidos = "Suárez Miguéns"

function edad() {
    let años = prompt("Introduce tu edad:")
    return años;
}

export default function Variable() {
    return (
        <>
            <p>
                Mi nombre es {nombre} {apellidos}
            </p>

            <p>Y mi edad es: {edad()} </p>
        </>
    )
}
