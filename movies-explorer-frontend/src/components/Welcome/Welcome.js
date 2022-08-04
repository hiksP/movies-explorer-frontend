import React from "react";
import Logo from "../../images/logo.svg"

export default function Welcome() {
    return(
        <div className="welcome">
            <img className="welcome__logo" src={Logo} alt="Логотип"></img>
            <p className="welcome__title">Рады Видеть!</p>
        </div>
    );
};