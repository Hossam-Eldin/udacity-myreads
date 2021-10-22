import React from 'react'
import BookShelf from './BookShelf'
export default function BookCase(props) {
    return (
        <div className="list-books-content">
            <div>
                {props.BookShelves.map((el,i)=>{
                    return <BookShelf books={props.books}  shelf={el} key={el.key} onMove={props.onMove} />
                })}
            </div>
        </div>
    )
}
