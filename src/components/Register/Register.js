import React from 'react';
import Welcome from '../Welcome/Welcome';
import { Link, Route, Routes } from "react-router-dom";

export default function Register() {
    return (
        <>
            <main>
              <Welcome text={'Добро пожаловать'}/>
              <section className="login">
                  <form className="login__form">
                      <ul className="login__list">
                          <li className='login__item'>
                              <p className="login__input-text">Имя</p>
                              <input className="login__input" required type="text"></input>
                          </li>
                          <li className='login__item'>
                              <p className="login__input-text">E-mail </p>
                              <input className="login__input" required type="email"></input>
                          </li>
                          <li className='login__item'>
                              <p className="login__input-text">Пароль </p>
                              <input className="login__input login__input_error" required type="text"></input>
                              <span className='login__error-text login__error-text_active'>Что-то пошло не так</span>
                          </li>
                      </ul>
                      <button className="login__button" type='submit'>Зарегистрироваться</button>
                  </form>
                  <p className="login__text">Уже зарегестрированы?
                      <Link to={'/signin'} className="login__link">Войти</Link>
                  </p>
              </section>
            </main>
        </>
    );
}