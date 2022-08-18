import React, { useState } from "react";
import logo from "../../images/logo.svg";
import icon from "../../images/profile_icon.svg";
import { Link, Route, Routes } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header({main}) {

    return main ? (
        <header className="header header_main">
            <div className="header__column">
                <Link className="header__link" to={'/'}><img className="header__logo" src={logo} alt="Логотип"/></Link>
            </div>
            <div className="header__column">
                <li className="header__list">
                    <Link className="header__button-register" to={'/signup'}>Регистрация</Link>
                    <Link className="header__link" to={'/signin'}> <button type="button" className="header__button-login">Войти</button> </Link>
                </li>
            </div>
        </header>
    ) : (
        <header className="header">
        <div className="header__column">
            <Link className="header__link" to={'/'}><img className="header__logo" src={logo} alt="Логотип"/></Link>
            <li className="header__list">
                <Link className="header__link" to={'/movies'}><ul className="header__list-element">Фильмы</ul></Link>
                <Link className="header__link" to={'/saved-movies'}><ul className="header__list-element">Сохранненые фильмы</ul></Link>
            </li>
        </div>
        <BurgerMenu></BurgerMenu>
    </header>
    )
}