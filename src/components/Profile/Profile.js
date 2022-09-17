import React from "react";
import Header from "../Header/Header";

export default function Profile() {
    return(
        <>
            <Header main={false}/>
            <main>
              <section className="profile">
                  <h1 className="profile__title">Привет, Петр</h1>
                  <form className="profile__form">
                      <ul className="profile__list">
                          <p className="profile__text">Имя</p>
                          <input className="profile__input"></input>
                          <p className="profile__text">Email</p>
                          <input className="profile__input"></input>
                      </ul>
                      <button type="button" className="profile__button">Редактировать</button>
                      <button type="button" className="profile__button profile__button_exit">Выйти из аккаунта</button>
                  </form>
              </section>
            </main>
        </>
    );
}