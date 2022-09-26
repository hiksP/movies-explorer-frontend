import React, { useState } from "react";
import logo from "../../images/logo.svg";
import icon from "../../images/profile_icon.svg";
import { Link, Route, Routes } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header({loggedIn}) {

  const path = document.location.pathname

    return path === '/' ? (
        <header className={path === '/' ? `header header_main` : `header`}>
            <div className="header__column">
                <Link className="header__link" to={'/'}><img className="header__logo" src={logo} alt="Логотип"/></Link>
            </div>
            <div className="header__column">
                <li className="header__list">
                    <Link className="header__button-register" to={loggedIn ? '/movies' : '/signup'}>{loggedIn ? 'Фильмы' : 'Регистрация'}</Link>
                    <Link className={loggedIn ? `header__button-register` : `header__button-hidden`} to={loggedIn ? '/saved-movies' : ''}>{loggedIn ? 'Сохранненые фильмы' : ''}</Link>
                    <Link className="header__link" to={loggedIn ? '/profile' : '/signin'}> <button type="button" className="header__button-login">{loggedIn ? 'Профиль' : 'Войти'}</button> </Link>
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
        <BurgerMenu path={path}></BurgerMenu>
    </header>
    )
}