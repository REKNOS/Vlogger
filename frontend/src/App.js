import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="homepage" />
         <Route element={<Login />} path="Login" />   
         </Routes>   
      </BrowserRouter>
  
    </div>
  );
}

export default App;