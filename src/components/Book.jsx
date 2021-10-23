import React from 'react'
import BookshelfChanger from './BookshelfChanger'

export default function Book(props) {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${props.book.imageLinks?.thumbnail})`,
                        }}
                    />
                    <BookshelfChanger book={props.book} onMove={props.onMove}/>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors &&  props.book.authors.join(', ')}</div>
            </div>
        </li>
    )
}
