import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="user-nav-div">
                <NavLink exact to={"/about"}>
                    About Us
                </NavLink>
                <NavLink exact to={"/contact"}>
                    Contact Us
                </NavLink>
                <NavLink exact to={"/products"}>
                    Products
                </NavLink>
            </div>
        </nav>
    )
}
