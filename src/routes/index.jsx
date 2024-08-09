import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import Alur from "../pages/alur-belajar.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alur-belajar" element={<Alur />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;