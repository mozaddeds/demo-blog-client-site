import React, { useState, useContext } from 'react';
import './Write.css';
import { ProfileContext, UserContext } from '../../App';


const Write = () => {

    const [imageUrl, setImageUrl] = useState(null);
    const [newsData, setNewsData] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useContext(ProfileContext);

    const handleImage = (e) => {
        setImageUrl(e.target.files[0]);
    }

    const handlePost = (e) => {
        const newsInfo = { ...newsData };
        newsInfo[e.target.name] = e.target.value;
        setNewsData(newsInfo);
        
    }

    const handleSubmit = (e) => {
        console.log(loggedInUser);
        const newsDetails = {
            title : newsData.title,
            email: user.email,
            name: user.name,
            description: newsData.description,
            date: new Date().toLocaleDateString(),
            img: imageUrl
        }
        console.log(newsDetails);
        e.preventDefault();
    }

    return (
        <div className="write">
            
            <form onSubmit={handleSubmit} className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input onChange={handleImage} type="file" id="fileInput" style={{ display: "none" }} />
                    <input onBlur={handlePost} name="title" type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea onBlur={handlePost} name="description" placeholder="Tell your story...." type="text" className="writeInput writeText">
                    </textarea>
                </div>
                <button className="writeSubmit"> Publish
                   </button>
            </form>
        </div>
    );
};

export default Write;