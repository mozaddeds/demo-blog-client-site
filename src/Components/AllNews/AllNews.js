import React from 'react';
import News from '../News/News';
import './AllNews.css'
import fakeData from '../News/fakeData.json';


const AllNews = () => {

    

    return (
        <div>
            <h1 className="news">All News</h1>
            <div className="allNews">
                {
                    fakeData.map(news => <News 
                        news={news}
                        keys={news.id}
                        ></News>)
                }
            </div>
        </div>
    );
};

export default AllNews;