import logo from "../assets/quiz-logo.png";
import React from "react";

export default function Header() {
    return (
        <header>
            <img className='image' src={logo} alt="logo"/>
            <h1>ReactQuiz</h1>
        </header>
    )
}