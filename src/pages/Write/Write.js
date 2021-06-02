import React, { useState, useContext } from 'react';
import './Write.css';
import { ProfileContext, UserContext } from '../../App';
import axios from 'axios';
import { useHistory } from 'react-router';


const Write = () => {

    let history = useHistory();

    const [imageUrl, setImageUrl] = useState(null);
    const [newsData, setNewsData] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useContext(ProfileContext);

    const handleImage = (e) => {
        const imgData = new FormData();
        imgData.set('key', '27d5f91841e9b02579f76312ffa2dfc4');
        imgData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
    }

    const handlePost = (e) => {
        const newsInfo = { ...newsData };
        newsInfo[e.target.name] = e.target.value;
        setNewsData(newsInfo);

    }

    const handleSubmit = (e) => {

        const newsDetails = {
            title: newsData.title,
            email: user.email,
            name: user.name,
            description: newsData.description,
            date: new Date().toLocaleDateString(),
            img: imageUrl
        }


        const url = 'https://boiling-bayou-21827.herokuapp.com/addNews';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsDetails)
        })

        e.preventDefault();
        e.target.reset();
        alert("Your news has been sent");
        history.push("/");
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