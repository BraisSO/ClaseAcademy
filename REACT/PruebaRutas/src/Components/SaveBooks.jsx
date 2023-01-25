import React from 'react'
import { useState } from 'react'

export default function SaveBooks() {

    const [data, setData] = useState({
        title:'',
        author:''
    })
    
    const handleChange = ({target}) => {
        setData({
        ...data,
        [target.name]:[target.value]
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data.title);

    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder='Titulo' onChange={handleChange} value={data.title}/>
        <input type="text" name="autor" placeholder='Autor' onChange={handleChange} value={data.author}/>
        <button type="submit">Enviar</button>
    </form>
  )
}
