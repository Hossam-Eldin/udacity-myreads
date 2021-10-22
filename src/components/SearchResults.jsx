import React from 'react'
import Book from './Book'

export default function SearchResults(props) {

    const updatedBooks = props.books.map((book) => {
        props.myBooks.map((b) => {
            if (b.id === book.id) {
                book.shelf = b.shelf;
            }
            return b;
        })
        return book;
    })

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {updatedBooks.map((b) => {
                    return <Book key={b.id} book={b} shelf={b.shelf ? b.shelf : "none"} onMove={props.onMove} />
                })}
            </ol>
        </div>
    )
}
