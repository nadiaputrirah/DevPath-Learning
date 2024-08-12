import React from "react";
import Navigation from '../components/Nav/navbar';
import Jumbotron from "../components/Jumbotron/jumbotron";
import Post from "../components/Content/post";

const Home = () => {

    return (
        <>
        <Navigation/>
        <Jumbotron/>
        <Post/>
        </>
    );
};

export default Home;