import React from 'react'

export default function Books({ books }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, i) => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
