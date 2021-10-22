import React, { useState } from 'react'

export default function SearchBooksInput(props) {
    const [value,setValue] =useState('');
    
    const handleChange= (e)=>{
        const val =e.target.value;
        setValue(val)
        props.onSearch(val);
    }


    return (
        <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={handleChange} value={value} />
        </div>
    )
}
