import React, { useEffect, useState } from 'react';
import './SinglePost.css';


const SinglePost = (props) => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('https://boiling-bayou-21827.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])

    const newsNo = props.newsId;
    let news;

    if (newsNo) {
        news = allNews.filter(newsItem => newsItem._id === newsNo)
    }



    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={news[0].img} alt="" />
                <h1 className="singlePostTitle">
                    {news[0].title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>{news[0].name}</b>
                    </span>
                    <span className="singlePostDate">{news[0].date} </span>
                </div>
                <p className="singlePostDesc">{news[0].description}</p>
            </div>
        </div>
    );
};

export default SinglePost;