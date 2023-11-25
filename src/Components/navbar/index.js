import React from "react";
import "./navbar.css";


export default function index() {
    return (
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/recommendations">Recommendations</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    );
}
