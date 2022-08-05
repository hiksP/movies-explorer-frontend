import React from "react";
import Welcome from "../Welcome/Welcome";

export default function Login() {
    return (
        <> 
            <Welcome text={'Рады видеть'}/>
            <div className="login">
                <form className="login__form">
                    <ul className="login__list">
                        <p className="login__input-text">Email</p>
                        <input className="login__input"></input>
                        <p className="login__input-text">Пароль </p>
                        <input className="login__input"></input>
                    </ul>
                    <button className="login__button">Войти</button>
                </form>
                <p className="login__text">Еще не зарегестрированы?
                    <a href="#" className="login__link">Регистрация</a>
                </p>
            </div>
        </>
    );
}