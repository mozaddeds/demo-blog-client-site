import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './AllNews.css'



const AllNews = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://boiling-bayou-21827.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <h1 className="news">All News</h1>
            <div className="allNews">
                {
                    news.map(news => <News
                        news={news}
                        keys={news._id}
                    ></News>)
                }
            </div>
        </div>
    );
};

export default AllNews;