import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import Register  from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Main  from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Routes, Route, useNavigate, Switch, Navigate } from "react-router-dom";
import {mainApi} from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {moviesApi} from '../../utils/MoviesApi';


export default function App() {

    document.documentElement.lang = 'ru'

    const navigate = useNavigate();

    // стейт логина

    const [loggedIn, setLoggedIn] = useState(false)

    // стейт с данными пользователя

    const [currentUser, setCurrentUser] = useState({})


    const [allMovies, setAllMovies] = useState([])
    const [foundMovies, setFoundMovies] = useState([]);
    const [isPreloaderActive, setPreloaderActive] = useState(false);
    const [noMovies, setNoMovies] = useState('');

    React.useEffect(() => {
      moviesApi.getInfo()
      .then((movies) => {
        setAllMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setNoMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
    })

    // функция регистрации
    const handleRegister = ({name, email, password}) => {
      mainApi.signUp(name, email, password)
      .then((res) => {
        navigate('/signin')
      })
      .catch((err) => {
        console.log(err);
      })
    }

    // функция логина
    const handleLogin = ({email, password}) => {
      mainApi.signIn(email, password)
      .then((res) => {
        createCookieInHour('jwt', res.token, 168)
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
    }

    // Функция поиска фильмов
    const handleSearch = (input) => {
      setPreloaderActive(true);
      const foundMoive = allMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(input.toLowerCase())
      });
      if (foundMoive.length === 0) {
        setNoMovies('Ничего не найдено');
        setPreloaderActive(false);
      } else {
        setTimeout(() => {
          setPreloaderActive(false);
        }, 500);
        setFoundMovies(foundMoive);
        setNoMovies('');
      }
    }

      // функция создания куки
      const createCookieInHour = (cookieName, cookieValue, hourToExpire) => {
        let date = new Date();
        date.setTime(date.getTime()+(hourToExpire*60*60*1000));
        document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
      };


    useEffect(() => {
        mainApi.getMe()
        .then((res) => {
          setLoggedIn(true)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])

    return(
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route path="/" element={
              <Main></Main>
            }/>
            <Route path="/movies" element={
              <Movies searchMovie={handleSearch} cards={foundMovies} preloader={isPreloaderActive} noMovies={noMovies}></Movies>
            }/>
            <Route path="/saved-movies" element={
              <SavedMovies></SavedMovies>
            }/>
            <Route path="/profile" element={
              <Profile></Profile>
            }/>
            <Route path="/signin" element={
              <Login onLogin={handleLogin}></Login>
            }/>
            <Route path="/signup" element={
              <Register register={handleRegister}></Register>
            }/>
            <Route path="*" element={
              <NotFoundPage></NotFoundPage>
            }/>
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    );

};