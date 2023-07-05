import {BrowserRouter, Route, Routes } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import Header from "../components/header/Header";
import Sidebar from "../components/nav/Sidebar";
import Footer from "../components/footer/Footer";

const App = () => {
 
    return(<BrowserRouter>
        <div className="app" id="outer-container">
        <div className="nav_content">
                <Header />
                <Sidebar />
                </div>
                <Routes>
                    <Route path="/" element={<Main selectedPage="Home" />} />
                    <Route path="/home*" element={<Main selectedPage="Home" />} />
                    <Route path="/tovars" element={<Main selectedPage="Tovars" />} />
                    <Route path="/addtovar" element={<Main selectedPage="AddTovar" />} />
                    <Route path="/basket" element={<Main selectedPage="Basket" />} />
                    <Route path="/infocard" element={<Main selectedPage="InfoCard" />} />
                </Routes>
        </div>
      
        <Footer />
    </BrowserRouter>
    )
}
export default App;
