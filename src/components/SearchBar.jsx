import React from 'react'
import CloseSearchButton from './CloseSearchButton'
import SearchBooksInput from './SearchBooksInput'
export default function SearchBar(props) {
    return (
        <div className="search-books-bar">
            <CloseSearchButton onReste={props.onReste}/>
            <SearchBooksInput onSearch={props.onSearch} />
        </div>
    )
}
