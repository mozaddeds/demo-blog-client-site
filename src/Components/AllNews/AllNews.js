import React from 'react';
import News from '../News/News';
import './AllNews.css'
const AllNews = () => {
    return (
        <div>
            <h1 className="news">All News</h1>
            <div className="allNews">
                <News></News>
                <News></News>
                <News></News>
                <News></News>
                <News></News>
                <News></News>
                <News></News>
                <News></News>
            </div>
        </div>
    );
};

export default AllNews;