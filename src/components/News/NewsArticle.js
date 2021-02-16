import React from 'react';
import UnderLine from '../UnderLine/UnderLine';
import './news-article.scss';

const NewsArticle = articleData => {
    const data = articleData.articleData;

    return(
        <article className="news-article">
            <UnderLine />
            <div className="news-content">
               
                <div className="article-details">
                    <div className="title-desc">
                        <h2 className="title">{data.title}</h2>
                        <p className="desc">{data.abstract}</p>
                    </div>
                    <div className="link-date">
                        <p className="publish-date">{data.published_date}</p>
                        <a className="article-link" href={data.url} target='_blank' rel="noreferrer">Read Article</a> 
                    </div>
                </div>
                <div className="article-img">
                    <img src={data.multimedia[0].url} alt={data.multimedia[0].caption}/>
                </div>
            </div>
        </article>
    );
}

export default NewsArticle;