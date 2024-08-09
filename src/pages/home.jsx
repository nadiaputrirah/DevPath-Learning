import React from "react";
import Navigation from '../components/Nav/navbar';
import Jumbotron from "../components/Jumbotron/jumbotron";
import WhyDev from "../components/Content/why";
import Skill from "../components/Content/skill";
import Mentor from "../components/Content/mentor";
import Review from "../components/Review/review";
import Footer from "../components/Footer/footer";

const Home = () => {

    return (
        <>
        <Navigation/>
        <Jumbotron/>
        <WhyDev/>
        <Skill/>
        <Mentor/>
        <Review/>
        <Footer/>
        </>
    );
};

export default Home;