import React from 'react'
import {NavLink}from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    return (
            <div className="sontainer-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Bilash Portfolio</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link"  activeClassName="menu_active" exact to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"  activeClassName="menu_active"  exact to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"  activeClassName="menu_active"  exact to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"   activeClassName="menu_active" exact  to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    )
}
