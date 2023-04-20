import React from 'react';
import { useState } from "react";
import movableSVG from "../assests/Movable-svg.svg";
import "./style.css";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <header>
                <span className="logo"><img src={""} alt="" /></span>
                <nav>
                    <ul className="nav__links">
                        <li>
                            <span>Product</span>
                        </li>
                        <li>
                            <span>Blog</span>
                        </li>
                        <li>
                            <span>Template</span>
                        </li>
                        <li>
                            <span>Pricing</span>
                        </li>
                    </ul>
                </nav>
                <span>Sign in</span>
                <span className="cta">Start Free</span>
                <p className="menu cta" onClick={() => setToggle(!toggle)}>Menu</p>
            </header>

            {
                toggle && (
                    <div className="overlay">
                        <span className="close" onClick={() => setToggle(!toggle)}>&times;</span>
                        <div className="overlay__content">
                            <span>Product</span>
                            <span>Template</span>
                            <span>Blog</span>
                            <span>Pricing</span>
                        </div>
                    </div>
                )}
        </div>
    )
}