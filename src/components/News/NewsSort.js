import React, {useState} from 'react';
import './news-sort.scss';

const NewsSort = props =>{

    const [sortByState, setSortByState] = useState("Popular News");
    
    return(
        <div className="news-sort">
            <h2>{sortByState}</h2>
            <div className="sort-control">
                <label htmlFor="sort-news">Sort News By:</label>
                <select name="sort-news" id="sort-news">
                    <option value="popularity">Popularity</option>
                    <option value="latest">Latest</option>
                </select>
            </div>  
        </div>
    );
}

export default NewsSort;