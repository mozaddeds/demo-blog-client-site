import React from 'react';
import './SinglePost.css';
import fakeData from '../News/fakeData.json';


const SinglePost = (props) => {

    const newsId = props.newsId;
    let news;

    if (newsId) {
        news = fakeData.filter(newsItem => newsItem.id === newsId)
        console.log(news[0]);
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