import React from 'react';
import LoginForm from '../components/Auth/login';
import Navigation from '../components/Nav/navbar';
import Footer from '../components/Footer/footer';

export default function Login() {
    return (
        <div>
        <Navigation/>
        <LoginForm/>
        <Footer/>
        </div>
    );
}
