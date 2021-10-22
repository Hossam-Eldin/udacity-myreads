import React from 'react'
import {Link} from 'react-router-dom';

export default function CloseSearchButton(props) {
    return (
        <Link to="/">
            <button className="close-search" onClick={props.onRest}>Close</button>
        </Link>
    )
}
