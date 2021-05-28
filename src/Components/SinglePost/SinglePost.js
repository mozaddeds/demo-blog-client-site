import React from 'react';
import './SinglePost.css'
const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Shakib</b>
                    </span>
                    <span className="singlePostDate">1 hour ago </span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam aut sapiente ex esse mollitia eum assumenda ab sint illo rem nobis, odio architecto modi totam? Provident alias praesentium omnis magnam minima impedit placeat, porro voluptas rem laborum recusandae quas magni tempora reprehenderit doloribus inventore! Quidem a sed excepturi porro.</p>
            </div>
        </div>
    );
};

export default SinglePost;