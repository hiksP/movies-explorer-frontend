import React, { useEffect, useState } from 'react';
import Welcome from '../Welcome/Welcome';

import { Link } from "react-router-dom";

export default function Register({register}) {

    //стейты инпутов
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [formValid, setFormValid] = useState(false);

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
      const re = /[a-zA-Zа-яА-Я]+$/i
      if(!re.test(String(e.target.value).toLowerCase())) {
        isNameDirty(true);
        setNameError('Имя должно состоять только из латиницы, кириллицы, допускается использовать пробел или дефис.');
      } else {
        setNameError('');
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

    useEffect(() => {
      if (nameError || emailError || passwordError ) {
        setFormValid(false)
      } else {
        setFormValid(true);
      }
    }, [nameError, emailError, passwordError])

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

    return (
        <>
            <main>
              <Welcome text={'Добро пожаловать'}/>
              <section className="login">
                  <form onSubmit={handleSubmit} className="login__form">
                      <ul className="login__list">
                          <li className='login__item'>
                              <p className="login__input-text">Имя</p>
                              <input required={true} name='name' value={name} onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} className={nameDirty && nameError ? `login__input login__input_error` : `login__input`}></input>
                              <span className={nameDirty && nameError ? `login__error-text login__error-text_active` : `login__error-text`}>{nameError}</span>
                          </li>
                          <li className='login__item'>
                              <p className="login__input-text">E-mail </p>
                              <input required={true} name='email' value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} className={emailDirty && emailError ? `login__input login__input_error` : `login__input`}></input>
                              <span className={emailDirty && emailError ? `login__error-text login__error-text_active` : `login__error-text`}>{emailError}</span>
                          </li>
                          <li className='login__item'>
                              <p className="login__input-text">Пароль </p>
                              <input required={true} name='password' value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} className={passwordDirty && passwordError ? `login__input login__input_error` : `login__input`}></input>
                              <span className={passwordDirty && passwordError ? `login__error-text login__error-text_active` : `login__error-text`}>{passwordError}</span>
                          </li>
                      </ul>
                      <button disabled={!formValid} className={!formValid ? `login__button login__button_disabled` : `login__button`} type='submit'>Зарегистрироваться</button>
                  </form>
                  <p className="login__text">Уже зарегестрированы?
                      <Link to={'/signin'} className="login__link">Войти</Link>
                  </p>
              </section>
            </main>
        </>
    );
}