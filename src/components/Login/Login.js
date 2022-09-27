import React from "react";
import Welcome from "../Welcome/Welcome";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Login({onLogin, error}) {

    // стейты инпутов
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //были ли мы в инпуте

    const [emailDirty, isEmailDirty] = useState(false);
    const [passwordDirty, isPasswordDirty] = useState(false);

    //стейт ошибок
    const [emailError, setEmailError] = useState('Емейл не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

    // стейт кнопки
    const [formValid, setFormValid] = useState(false);

    // функции ввода инпута
    const emailHandler = (e) => {
      setEmail(e.target.value);
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(e.target.value).toLowerCase())) {
        isEmailDirty(true);
        setEmailError('Некорректный емейл');
      } else {
        setEmailError('');
      }
    }

    const passwordHandler = (e) => {
      setPassword(e.target.value);
      if(e.target.value === '') {
        isPasswordDirty(true);
        setPasswordError('Пароль не может быть пустым')
      } else {
        setPasswordError('')
      }
    }

    const blurHandler = (e) => {
      switch(e.target.name) {
        case 'name':
          isNameDirty(true)
          break
        case 'email':
          isEmailDirty(true)
          break
        case 'password':
          isPasswordDirty(true);
          break
      }
  }

    const handleSubmit = (e) => {
      e.preventDefault();

      onLogin({
        email: email,
        password: password,
      });
    }

    useEffect(() => {
      if ( emailError || passwordError ) {
        setFormValid(false)
      } else {
        setFormValid(true);
      }
    }, [emailError, passwordError])



    return (
        <>
            <main>
              <Welcome text={'Рады видеть'}/>
              <section className="login">
                  <form onSubmit={handleSubmit} className="login__form">
                      <ul className="login__list">
                          <li className="login__item">
                              <p className="login__input-text">Email</p>
                              <input value={email} name='email' onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} className={emailDirty && emailError ? `login__input login__input_error` : `login__input`} required={true}></input>
                              <span className={emailDirty && emailError ? `login__error-text login__error-text_active` : `login__error-text`}>{emailError}</span>
                          </li>
                          <li className="login__item">
                              <p className="login__input-text">Пароль </p>
                              <input value={password} name='password' onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} className={passwordDirty && passwordError ? `login__input login__input_error` : `login__input`} required={true}></input>
                              <span className={passwordDirty && passwordError ? `login__error-text login__error-text_active` : `login__error-text`}>{passwordError}</span>
                          </li>
                      </ul>
                      <p className={error ? `login__error-text login__error-text_active` : `login__error-text`}>{error}</p>
                      <button disabled={!formValid} className={!formValid ? `login__button login__button_disabled` : `login__button`} type="submit">Войти</button>
                  </form>
                  <p className="login__text">Еще не зарегестрированы?
                      <Link to={'/signup'} className="login__link">Регистрация</Link>
                  </p>
              </section>
            </main>
        </>
    );
}