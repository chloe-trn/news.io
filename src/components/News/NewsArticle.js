import React from 'react';

const NewsArticle = articleData => {
    const data = articleData.articleData;
    console.log(data);

    return(
        <article>
            <h2>{data.title}</h2>
            <img src={data.urlToImage} alt={data.description}/>
            <p>{data.description}</p>
            <p>{data.author}</p>
            <p>{data.publishedAt}</p>
            <p>{data.content}</p>
            <a href={data.url} target='_blank' rel="noreferrer">Read Article</a>
        </article>
    );
}

export default NewsArticle;