import React, { useState } from 'react';
import './News.css'
import fakeData from './fakeData.json';
import { useHistory } from 'react-router';

const News = (props) => {

    let history = useHistory();

    const { _id, title, email, name, description, date, img } = props.news;
    const openNews = (newsId) => {
        const url = `/news/hvfhe${newsId}`;
        history.push(url);
    }

    return (

        <div onClick = {() => openNews(_id)} className="post">
            <img className="postImg" src={img} alt=""
            />

            <div className="postInfo">
                <span className="postTitle">{title}
                </span>
                <hr />
                <span className="postDate">{date}</span>
            </div>
            <p className="postDesc">{description}</p>
        </div>


    );
};

export default News;