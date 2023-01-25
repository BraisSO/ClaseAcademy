import {useState, useEffect } from 'react'
import BookService from '../../http/BookService';
import Books from '../pages/Book';

export default function BooksList() {

    const [data, setData] = useState([]);
    useEffect(() => {
        BookService.getAll
            .then(res => {
                setData(res.data)
                console.log(res);
            }, [])
    })

    return (
        <div>
            <Books books={data}/>
        </div>
       
    )
}
