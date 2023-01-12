import React from 'react'

function aleatorio(limite){
    return Math.ceil(Math.random()*limite);
}

export const FunctionComponent = () => {
  return (
    <>
    Brais tiene {aleatorio(382)} de IQ
    </>
  )
}
