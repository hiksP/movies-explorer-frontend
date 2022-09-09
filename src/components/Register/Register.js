import React, { useState } from 'react';
import Welcome from '../Welcome/Welcome';
import { useRef } from 'react';
import { Link, Route, Routes } from "react-router-dom";

export default function Register({register}) {

    //стейты инпутов
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    //функции ввода инпута
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

    const nameHandler = (e) => {
      setName(e.target.value);
    }

    const passwordHandler = (e) => {
      setPassword(e.target.value);
    }

    //были ли мы в инпуте

    const [emailDirty, isEmailDirty] = useState(false);
    const [passwordDirty, isPasswordDirty] = useState(false);
    const [nameDirty, isNameDirty] = useState(false);

    //стейт ошибок
    const [emailError, setEmailError] = useState('Емейл не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [nameError, setNameError] = useState('Имя не может быть пустым');

    const handleSubmit = (e) => {
      e.preventDefault();

      register({
        name: name,
        email: email,
        password: password
      });
  }

    return (
        <>
            <main>
              <Welcome text={'Добро пожаловать'}/>
              <section className="login">
                  <form onSubmit={handleSubmit} className="login__form">
                      <ul className="login__list">
                          <li className='login__item'>
                              <p className="login__input-text">Имя</p>
                              <input name='name' value={name} onChange={nameHandler} onBlur={e => blurHandler(e)} className={nameDirty && nameError ? `login__input login__input_error` : `login__input`}  required></input>
                              <span className={nameDirty && nameError ? `login__error-text login__error-text_active` : `login__error-text`}>{nameError}</span>
                          </li>
                          <li className='login__item'>
                              <p className="login__input-text">E-mail </p>
                              <input name='email' value={email} onChange={e => emailHandler(e)} className={emailDirty && emailError ? `login__input login__input_error` : `login__input`}  required></input>
                              <span className={emailDirty && emailError ? `login__error-text login__error-text_active` : `login__error-text`}>{emailError}</span>
                          </li>
                          <li className='login__item'>
                              <p className="login__input-text">Пароль </p>
                              <input name='password' value={password} onChange={passwordHandler} onBlur={e => blurHandler(e)} className={passwordDirty && passwordError ? `login__input login__input_error` : `login__input`} required></input>
                              <span className={passwordDirty && passwordError ? `login__error-text login__error-text_active` : `login__error-text`}>{passwordError}</span>
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