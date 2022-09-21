import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import {useState, useEffect} from "react"

export default function Profile({getInfo, logOut}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailDirty, isEmailDirty] = useState(false);
  const [nameDirty, isNameDirty] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [sameDataError, setSameDateError] = useState('');

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

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'name':
        isNameDirty(true)
        break
      case 'email':
        isEmailDirty(true)
        break
    }
}

  const nameHandler = (e) => {
    setName(e.target.value);
    if(e.target.value === '') {
      isNameDirty(true);
      setNameError('Имя не может быть пустым');
    } else {
      setNameError('');
    }
  }

  const changeInfo = (e) => {
    e.preventDefault();

    getInfo(name, email);
  }

  const infoChecker = () => {
    if(name === currentUser.name && email === currentUser.email) {
      setSameDateError('Данные должны отличаться от предыдущих!')
    } else {
      setSameDateError('');
    }
  }

  useEffect(() => {
    infoChecker()
  }, [name, email])

  useEffect(() => {
    if ( nameError || emailError || sameDataError ) {
      setFormValid(false)
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, sameDataError])

    return(
        <>
            <Header main={false}/>
            <main>
              <section className="profile">
                  <h1 className="profile__title">{`Привет, ` + `${currentUser.name}`}</h1>
                  <form className="profile__form">
                      <ul className="profile__list">
                          <p className="profile__text">{currentUser.name}</p>
                          <input value={name} name='name' onBlur={(e) => blurHandler(e)} onChange={(e) => nameHandler(e)} className="profile__input"></input>
                          <span className={nameDirty && nameError ? `profile__error-text profile__error-text_active` : `profile__error-text`}>{nameError}</span>
                          <p className="profile__text">{currentUser.email}</p>
                          <input value={email} name='email' onBlur={(e) => blurHandler(e)} onChange={(e) => emailHandler(e)} className="profile__input"></input>
                          <span className={emailDirty && emailError || sameDataError ? `profile__error-text profile__error-text_active` : `profile__error-text`}>{emailError || sameDataError}</span>
                      </ul>
                      <button type="button" disabled={!formValid} className={!formValid ? `profile__button profile__button_disabled` : `profile__button`} onClick={(e) => changeInfo(e)}>Редактировать</button>
                      <button type="button" onClick={logOut} className="profile__button profile__button_exit">Выйти из аккаунта</button>
                  </form>
              </section>
            </main>
        </>
    );
}