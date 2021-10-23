import React,{useState} from 'react'
import BookCase from './BookCase'
import { Link } from 'react-router-dom'

export default function BookList(props) {


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookCase BookShelves={props.BookShelves} books={props.books} onMove={props.onMove} />
            <div className="open-search">
                <Link to="search">
                <button >Add a book</button>
                </Link>
            </div>
        </div>
    )
}
