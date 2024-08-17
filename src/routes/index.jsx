import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import Alur from "../pages/alur-belajar.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alur-belajar" element={<Alur />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />            
            </Routes>
        </BrowserRouter>
    );
};

export default Router;