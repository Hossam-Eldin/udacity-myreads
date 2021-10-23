import React from 'react'
import Book from './Book'
export default function BookShelf(props) {

    const booksOnShelf = props.books.filter(book => book.shelf === props.shelf.key);

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {booksOnShelf.map((b) => {
                            return (<Book key={b.id}
                                shelf={props.shelf.key}
                                book={b}
                                onMove={props.onMove} />)
                        })}
                        
                    </ol>
                </div>
            </div>
        </div>
    )
}
