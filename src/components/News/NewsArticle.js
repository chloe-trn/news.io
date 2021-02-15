import React from 'react';

const NewsArticle = articleData => {
    const data = articleData.articleData;

    return(
        <article>
            <h2>{data.title}</h2>
            <img src={data.multimedia[0].url} alt={data.multimedia[0].caption}/>
            <p>{data.abstract}</p>
            <p>{data.byline}</p>
            <p>{data.published_date}</p>
            <a href={data.url} target='_blank' rel="noreferrer">Read Article</a>
        </article>
    );
}

export default NewsArticle;