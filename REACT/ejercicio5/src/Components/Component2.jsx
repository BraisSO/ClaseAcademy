import React from 'react'

let nombre="Pepe";
let email= "pepe.samuco@softwareone.com"

function Component2({numero}) {
  return (
    <>
        <p>{nombre}</p>
        <p>{email} </p>
        <p>{numero} </p>
     </>
   
  )
}



export default Component2
