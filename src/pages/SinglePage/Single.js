import React from 'react';
import SinglePost from '../../Components/SinglePost/SinglePost';
import { useParams } from 'react-router';
import './Single.css';

const Single = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div className="single">
            <SinglePost newsId={id}></SinglePost>
        </div>
    );
};

export default Single;