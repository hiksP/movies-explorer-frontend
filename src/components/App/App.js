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

    useEffect(() => {
      moviesApi.getInfo()
      .then((movies) => {
        setAllMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setNoMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
    }, [loggedIn])

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
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
    }

    // функця изминения данных
    const handlePatchUser = (name, email) => {
      mainApi.patchUser(name, email)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    const handleLogOut = () => {
      mainApi.signOut()
      .then((res) => {
        navigate('/');
        setCurrentUser({});
        setLoggedIn(false);
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


    useEffect(() => {
        mainApi.getMe()
        .then((res) => {
          setLoggedIn(true)
          setCurrentUser(res);
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
              <Profile getInfo={handlePatchUser} logOut={handleLogOut}></Profile>
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