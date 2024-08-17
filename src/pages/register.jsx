import React from 'react';
import Navigation from '../components/Nav/navbar';
import Footer from '../components/Footer/footer';
import RegisterForm from '../components/Auth/register';

export default function Register() {
    return (
        <div>
        <Navigation/>
        <RegisterForm/>
        <Footer/>
        </div>
    );
}
