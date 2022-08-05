import React from 'react';
import Welcome from '../Welcome/Welcome';

export default function Register() {
    return (
        <> 
            <Welcome text={'Добро пожаловать'}/>
            <div className="login">
                <form className="login__form">
                    <ul className="login__list">
                        <p className="login__input-text">Имя</p>
                        <input className="login__input"></input>
                        <p className="login__input-text">E-mail </p>
                        <input className="login__input"></input>
                        <p className="login__input-text">Пароль </p>
                        <input className="login__input"></input>
                    </ul>
                    <button className="login__button">Зарегистрироваться</button>
                </form>
                <p className="login__text">Уже зарегестрированы?
                    <a href="#" className="login__link">Войти</a>
                </p>
            </div>
        </>
    );
}