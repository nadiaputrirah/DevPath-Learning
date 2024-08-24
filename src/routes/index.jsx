import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import Alur from "../pages/alur-belajar.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import ClassUser from "../pages/dashboard/user/class.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alur-belajar" element={<Alur />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kelas-user" element={<ClassUser />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;