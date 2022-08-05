import React from "react";
import Logo from "../../images/logo.svg"

export default function Welcome({text}) {
    return(
        <div className="welcome">
            <img className="welcome__logo" src={Logo} alt="Логотип"></img>
            <h2 className="welcome__title">{text}</h2>
        </div>
    );
};