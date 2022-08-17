import React from "react";
import Logo from "../../images/logo.svg";
import { Link, Route, Routes } from "react-router-dom"

export default function Welcome({text}) {
    return(
        <div className="welcome">
            <Link to={'/'}><img className="welcome__logo" src={Logo} alt="Логотип"></img></Link>
            <h2 className="welcome__title">{text}</h2>
        </div>
    );
};