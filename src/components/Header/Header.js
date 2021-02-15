import React from 'react';
import UnderLine from '../UnderLine/UnderLine';
import Search from '../Search/Search';
import './header.scss';

const Header = props => {
    return(
        <header>
            <UnderLine/>
            <div class="container">
                <h1>News.io</h1>
                <Search/>
            </div>
            <UnderLine/>
        </header>
    );
}

export default Header;