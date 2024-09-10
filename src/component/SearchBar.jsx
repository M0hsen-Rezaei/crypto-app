import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar( {setSearchTerm}) {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="search-bar">
            <input onChange={handleChange} className="search-input" type="text" placeholder="search in all crypto" />
            <FontAwesomeIcon icon={faSearch} className='search-icon'></FontAwesomeIcon>
        </div>
    )
}
