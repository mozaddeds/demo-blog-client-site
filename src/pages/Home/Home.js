import React from 'react';
import AllNews from '../../Components/AllNews/AllNews';
import Header from '../../Components/Header/Header';



import Post from '../../Components/Post/Post';
import './Home.css'
const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="home">
                <Post></Post>
                <AllNews></AllNews>
            </div>
        </>
    );
};

export default Home;