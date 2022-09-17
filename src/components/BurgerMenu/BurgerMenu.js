import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/profile_icon.svg";
import { useState } from "react";

export default function BurgerMenu() {

    const [width, SetWidth] = useState(window.outerWidth);

    window.addEventListener('resize', () => {
      setTimeout(() => {
        const windowInnerWidth = window.innerWidth
        SetWidth(windowInnerWidth)
      }, 1000)
    })

    const [menuActive, setMenuActive] = useState(false)

    const openMenu = () => {
        setMenuActive(!menuActive);
    }

    return width < 769 ? (
        <nav className="burger">
            <button type="button" className="burger__button" onClick={openMenu}>
                <span className="burger__style"></span>
            </button>
            <div className={menuActive ? 'burger__blur burger__blur_active' : "burger__blur"}></div>
            <div className={menuActive ? "burger__content burger__content_active" : "burger__content"}>
                <button type="button" className="burger__close-button" onClick={openMenu}></button>
                <ul className="burger__list">
                    <Link className="burger__link" to={'/'}><li className="burger__item">Главная</li></Link>
                    <Link className="burger__link" to={'/movies'}><li className="burger__item burger__item_active">Фильмы</li></Link>
                    <Link className="burger__link" to={'/saved-movies'}><li className="burger__item">Сохранённые фильмы</li></Link>
                </ul>
                <div className="burger__profile">
                    <Link to={'/profile'} className="burger__link">Аккаунт</Link>
                    <img className="burger__profile-icon" src={icon} alt="Иконка"/>
                </div>
            </div>
        </nav>
    ) : (
        <div className="header__column">
            <li className="header__list">
                <Link className="header__link" to={'/profile'}><ul className="header__list-element">Аккаунт</ul></Link>
                <ul className="header__list-container">
                    <img className="header__profile-icon" src={icon} alt="Иконка"/>
                </ul>
            </li>
        </div>
    );
}