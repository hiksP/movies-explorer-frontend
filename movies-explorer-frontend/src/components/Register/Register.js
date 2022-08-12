import React from 'react';
import Welcome from '../Welcome/Welcome';
import { Link, Route, Routes } from "react-router-dom";

export default function Register() {
    return (
        <> 
            <Welcome text={'Добро пожаловать'}/>
            <div className="login">
                <form className="login__form">
                    <ul className="login__list">
                        <p className="login__input-text">Имя</p>
                        <input className="login__input" required type="text"></input>
                        <p className="login__input-text">E-mail </p>
                        <input className="login__input" required type="email"></input>
                        <p className="login__input-text">Пароль </p>
                        <input className="login__input" required type="text"></input>
                    </ul>
                    <button className="login__button" type='submit'>Зарегистрироваться</button>
                </form>
                <p className="login__text">Уже зарегестрированы?
                    <Link to={'/signin'} className="login__link">Войти</Link>
                </p>
            </div>
        </>
    );
}