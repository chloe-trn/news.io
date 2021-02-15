import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search.scss';

const Search = props => {
    return(
        <form role="search">
            <label for="search"/>
            <input type="search" name="search" aria-label="search text" placeholder="Search Articles..."/>
            <label for="submit"/>
            <FontAwesomeIcon icon={faSearch} className="search-icon" name="submit" aria-label="submit search"/>
        </form>
    );
}

export default Search;