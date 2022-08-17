import React from "react";
import Welcome from "../Welcome/Welcome";
import { Link, Route, Routes } from "react-router-dom";

export default function Login() {
    return (
        <>
            <Welcome text={'Рады видеть'}/>
            <div className="login">
                <form className="login__form">
                    <ul className="login__list">
                        <li className="login__item">
                            <p className="login__input-text">Email</p>
                            <input className="login__input" required type="email"></input>
                        </li>
                        <li className="login__item">
                            <p className="login__input-text">Пароль </p>
                            <input className="login__input" required type="text"></input>
                        </li>
                    </ul>
                    <button className="login__button" type="submit">Войти</button>
                </form>
                <p className="login__text">Еще не зарегестрированы?
                    <Link to={'/signup'} className="login__link">Регистрация</Link>
                </p>
            </div>
        </>
    );
}