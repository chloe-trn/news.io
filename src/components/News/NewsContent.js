import React, { useContext } from 'react';
import {NewsContext} from '../../NewsContext'; 
import NewsArticle from './NewsArticle';

const NewsContent = props =>{
    const newsData = useContext(NewsContext);

    return(
        <div>
            {
                newsData ? 
                newsData.results.map(articleData => (
                    <NewsArticle articleData={articleData} key={articleData.title + articleData.url} />
                )) :
                <></>
            }
        </div>
    );
}

export default NewsContent;