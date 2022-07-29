import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddVlog from './components/AddVlog';
import BrowseVlog from './components/BrowseVlog';
import Header from './components/Header';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="homepage" />
         <Route element={<Login />} path="Login" /> 
         <Route element={<Signup />} path="Signup" /> 
         <Route element={<AddVlog />} path="Addvlog" />
         <Route element={<BrowseVlog />} path="BrowseVlog" />   
         </Routes>   
      </BrowserRouter>
  
    </div>
  );
}

export default App;