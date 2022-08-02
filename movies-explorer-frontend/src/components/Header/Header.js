import React from "react";
import logo from "../../images/logo.svg";
import icon from "../../images/profile_icon.svg";

export default function Header() {
    return(
        <div className="Header">
            <div className="header__column">
                <img className="header__logo" src={logo} alt="Логотип"/>
                <li className="header__list">
                    <ul className="header__list-element">Фильмы</ul>
                    <ul className="header__list-element">Сохранненые фильмы</ul>
                </li>
            </div>
            <div className="header__column">
                <li className="header__list">
                    <ul className="header__list-element">Аккаунт</ul>
                    <ul className="header__list-container">
                        <img className="header__profile-icon" src={icon} alt="Иконка"/>
                    </ul>
                </li>
            </div>
        </div>
    )
}