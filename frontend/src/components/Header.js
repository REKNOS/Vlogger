import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {

return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://ik.imagekit.io/bd17moh5dcc7/wp-content/uploads/2018/06/camera2.png?x95351"
                height="50"
                alt="vlogger Logo"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
                </li> 
                <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  Signup
                </NavLink>
                </li> 
                <li className="nav-item">
                <NavLink className="nav-link" to="/AddVlog">
                  AddVlog
                </NavLink>
              </li>   
              <li className="nav-item">
                <NavLink className="nav-link" to="/BrowseVlog">
                  Vlogs
                </NavLink>
              </li>           
            </ul>
          </div> 
          </div>
          </nav>
        </div>
      
  )
};

export default Header;