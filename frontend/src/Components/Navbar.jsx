// import React from 'react'
import { Link } from "react-router-dom";
import "../assets/Styles/Navbar.css";

export default function Navbar({ scrollCallback }) {
    // function printName(e) {
    //     e.preventDefault();
    //     console.log(e.target.name);
    // }
    return (
        <div className="Nav fc-white">
            <div className="logo">
                <span>Ph</span>
                <span>find your balance</span>
            </div>
            <ul className="menu">
                <li onClick={(e) => scrollCallback(e.target.name)}>
                    <Link name="Home" to="/">
                        Home
                    </Link>
                </li>
                <li onClick={(e) => scrollCallback(e.target.name)}>
                    <Link name="About" to="/">
                        About
                    </Link>
                </li>
                <li onClick={(e) => scrollCallback(e.target.name)}>
                    <Link name="Services" to="/">
                        Services
                    </Link>
                </li>
                <li onClick={(e) => scrollCallback(e.target.name)}>
                    <Link name="Contact" to="/">
                        Contact
                    </Link>
                </li>
                <li className="btn">Login</li>
                <li className="btn">Signup</li>
            </ul>
        </div>
    );
}
