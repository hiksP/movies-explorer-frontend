import React from "react";
import Welcome from "../Welcome/Welcome";
import { Link, Route, Routes } from "react-router-dom";
import { useRef } from "react";

export default function Login({onLogin}) {

    // создаем рефы
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();

      onLogin({
        email: emailRef.current.value,
        password: passwordRef.current.value
      });
    }


    return (
        <>
            <main>
              <Welcome text={'Рады видеть'}/>
              <section className="login">
                  <form onSubmit={handleSubmit} className="login__form">
                      <ul className="login__list">
                          <li className="login__item">
                              <p className="login__input-text">Email</p>
                              <input ref={emailRef} defaultValue="" className="login__input" required type="email"></input>
                          </li>
                          <li className="login__item">
                              <p className="login__input-text">Пароль </p>
                              <input ref={passwordRef} defaultValue="" className="login__input" required type="text"></input>
                          </li>
                      </ul>
                      <button className="login__button" type="submit">Войти</button>
                  </form>
                  <p className="login__text">Еще не зарегестрированы?
                      <Link to={'/signup'} className="login__link">Регистрация</Link>
                  </p>
              </section>
            </main>
        </>
    );
}