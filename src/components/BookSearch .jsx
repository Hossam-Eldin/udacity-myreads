import React,{useState} from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'


export default function BookSearch (props) {

    return (
        <div className="search-books">
            <SearchBar onSearch={props.onSearch} onMove={props.onReset} />
            <SearchResults searchBooks={props.searchBooks} onMove={props.onMove} myBooks={props.myBooks} />
        </div>
    )
}
