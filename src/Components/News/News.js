import React from 'react';
import './News.css'
const News = () => {
    return (

        <div className="post">
            <img className="postImg" src="https://avatars.githubusercontent.com/u/76786635?s=96&v=4" alt=""
            />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet con?
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusantium aliquam, quod deleniti sunt quae. Molestiae, nesciunt reprehenderit? Nemo, ducimus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusantium aliquam, quod deleniti sunt quae. Molestiae, nesciunt reprehenderit? Nemo, ducimus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusantium aliquam, quod deleniti sunt quae. Molestiae, nesciunt reprehenderit? Nemo, ducimus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusantium aliquam, quod deleniti sunt quae. Molestiae, nesciunt reprehenderit? Nemo, ducimus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusantium aliquam, quod deleniti sunt quae. Molestiae, nesciunt reprehenderit? Nemo, ducimus!</p>
        </div>


    );
};

export default News;