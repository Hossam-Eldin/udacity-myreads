import React,{useState} from 'react'
import BookCase from './BookCase'

export default function BookList(props) {


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookCase BookShelves={props.BookShelves} books={props.books} onMove={props.onMove} />
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>
    )
}
