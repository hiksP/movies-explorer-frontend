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
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute.js";

export default function App() {

    document.documentElement.lang = 'ru'
    const path = document.location.pathname;

    const navigate = useNavigate();

    // стейт логина
    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('logged')) || false)

    //данные в локальном хранилище
    const localShortMovies = JSON.parse(localStorage.getItem('shortMovies'));


    //переключатель короткометражек
    const [onlyShortMovies, setOnlyShortMovies] = useState(JSON.parse(localStorage.getItem('onlyShort')) || false);
    const [savedOnlyShortMovies, setSavedOnlyShortMovies] = useState(JSON.parse(localStorage.getItem('savedOnlyShort')) || false);

    // стейт с данными пользователя

    const [currentUser, setCurrentUser] = useState({})
    const [foundMovies, setFoundMovies] = useState([]);
    const [isPreloaderActive, setPreloaderActive] = useState(false);
    const [noMovies, setNoMovies] = useState('');
    const [ savedMovies, setSavedMovies ] = useState([]);
    const [registerError, setRegisterError] = useState('');

    // очистка предыдущих ошибок(для навигации)
    useEffect(() => {
      setRegisterError('')
    }, [navigate])

    const serverError = (err) => {
      alert(err)
      setLoggedIn(false)
      setCurrentUser({})
      localStorage.clear()
      navigate('/')
    }

    useEffect(() => {
      if(JSON.parse(localStorage.getItem('logged'))) {
        setLoggedIn(true)
      }
    }, [])

      useEffect(() => {
      mainApi.getMe()
      .then((res) => {
        setLoggedIn(true)
        setCurrentUser(res);
        localStorage.setItem('userName', res.name);
        localStorage.setItem('userEmail', res.email);
        localStorage.setItem('id', res.id);
        JSON.stringify(localStorage.setItem('logged', true))
      })
      .catch((err) => {
        if(err === 'Ошибка 500') {
          serverError('Произошла ошибка, авторизируйтесь повторно')
        }
      })

      if(loggedIn) {
        mainApi.getSavedMovies()
        .then((res) => {
          const cards = res.filter((card) => {
            return card.owner === localStorage.getItem('id')
          });
          setSavedMovies(cards);
          localStorage.setItem('savedMovies', JSON.stringify(cards))
        })
        .catch((err) => {
          if(err === 'Ошибка 500') {
            serverError('Произошла ошибка, Авторизируйтесь повторно')
          } else alert(err)
        })
      }
    }, [loggedIn])

    useEffect(() => {
      if(loggedIn) {
        moviesApi.getInfo()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies))
        })
        .catch((err) => {
          if(err === 'Ошибка 500') {
            serverError('Произошла ошибка, Авторизируйтесь повторно')
          } else {
            setNoMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
          }
        })
      }
    }, [loggedIn])


    // функция регистрации
    const handleRegister = ({name, email, password}) => {
      mainApi.signUp(name, email, password)
      .then((res) => {
        mainApi.signIn(res.email, password)
        .then((res) => {
          setCurrentUser({
            name,
            email
          })
          setLoggedIn(true);
          navigate('/movies');
        })
      })
      .catch((err) => {
        err === 'Ошибка 409' ? setRegisterError('Такой пользователь уже зарегестрирован') : setRegisterError(err)
      })
    }

    // функция логина
    const handleLogin = ({email, password}) => {
      mainApi.signIn(email, password)
      .then((res) => {
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        err === 'Ошибка 401' ? setRegisterError("Неправильные почта или пароль") : setRegisterError(err)
      })
    }

    // функця изминения данных
    const handlePatchUser = (name, email) => {
      mainApi.patchUser(name, email)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        if(err === 'Ошибка 500') {
          serverError('Произошла ошибка, Авторизируйтесь повторно')
        } else {
          setRegisterError(err)
        }
      })
    }

    const handleLogOut = () => {
      mainApi.signOut()
      .then((res) => {
        localStorage.clear();
        navigate('/');
        setCurrentUser({});
        setFoundMovies([])
        setSavedMovies([])
        setLoggedIn(false);
        JSON.stringify(localStorage.setItem('logged', false))
      })
      .catch((err) => {
        if(err === 'Ошибка 500') {
          serverError('Произошла ошибка, Авторизируйтесь повторно')
        } {
          setRegisterError(err);
        }
      })
    }

    // Функция поиска фильмов
    const handleSearch = (input) => {
      const allMovies = JSON.parse(localStorage.getItem('allMovies'));
      setPreloaderActive(true);
        const foundMovies = allMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(input.toLowerCase())
      });

      const shortMovies = foundMovies.filter((movie) => {
        return movie.duration <= 40
      })

      localStorage.setItem('shortMovies', JSON.stringify(shortMovies));

      localStorage.setItem('allFoundMovies', JSON.stringify(foundMovies))

      if(onlyShortMovies) {
        setFoundMovies(shortMovies);
        setNoMovies('');
      } else {
        setFoundMovies(foundMovies)
        setNoMovies('');
      }

      if (!onlyShortMovies && foundMovies.length < 1) {
        setNoMovies('Ничего не найдено');
      } else if(onlyShortMovies && shortMovies.length < 1) {
        setNoMovies('Короткомтеражек нет')
      }

      setPreloaderActive(false);
    }

    const handleSave = (card) => {
      const {country, director, duration, year, description, image, trailerLink, thumbnail, id, nameRU, nameEN} = card;
      mainApi.saveMoive(country, director, duration, year, description, `https://api.nomoreparties.co${card.image.url}`, trailerLink, thumbnail, id, nameRU, nameEN)
      .then((res) => {
        localStorage.setItem('savedMovies', JSON.stringify([res, ...savedMovies]));
        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
      })
      .catch((err) => {
        if(err === 'Ошибка 500') {
          serverError('Произошла ошибка, Авторизируйтесь повторно')
        } else alert(err);
      })
    }

    const savedHandleSearch = (input) => {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies'))
      const foundMovies = savedMovies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(input.toLowerCase())
      })

      if(foundMovies.length === 0) {
        setNoMovies('Ничего не найедно')
        setSavedMovies(foundMovies)
        return
      }


      const savedShortMovies = foundMovies.filter((movie) => {
        return movie.duration <= 40
      })

      if(savedOnlyShortMovies && savedShortMovies.length === 0) {
        setNoMovies('Короткометражек нет!')
        setSavedMovies(savedShortMovies)
        return
      }

      localStorage.setItem('savedShortMovies', savedShortMovies)

      if(onlyShortMovies) {
        setSavedMovies(savedShortMovies)
        setNoMovies('')
      } else {
        setSavedMovies(foundMovies);
        setNoMovies('')
      }
    }

    const handleRemove = (id) => {
      mainApi.deleteMovie(id)
      .then((res) => {
        const lessMovies = savedMovies.filter((movie) => movie._id !== id);
        localStorage.setItem('savedMovies', JSON.stringify(lessMovies));
        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
      })
      .catch((err) => {
        if(err === 'Ошибка 500') {
          serverError('Произошла ошибка, Авторизируйтесь повторно')
        } else alert(err)
      })
    }


    useEffect(() => {
        if(onlyShortMovies && localShortMovies) {
          setFoundMovies(localShortMovies)
        } else if(localStorage.getItem('allFoundMovies')){
          setNoMovies('')
          setFoundMovies(JSON.parse(localStorage.getItem('allFoundMovies')))
        }

        if(JSON.parse(localStorage.getItem('savedMovies'))) {
          setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
        }

    }, [navigate, onlyShortMovies])


    const handlerShortMovies = () => {
      if(path === '/movies') {
        const showOnlyShortMovies = !onlyShortMovies
        setOnlyShortMovies(showOnlyShortMovies)
        localStorage.setItem('onlyShort', JSON.stringify(showOnlyShortMovies));
      } else {
        const showOnlyShortMovies = !savedOnlyShortMovies
        setSavedOnlyShortMovies(showOnlyShortMovies)
        localStorage.setItem('savedOnlyShort', JSON.stringify(showOnlyShortMovies));
      }
    }

    return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route path="/" element={
              <Main loggedIn={loggedIn}></Main>
            }/>
            <Route path="/movies" element={
              <ProtectedRoute
              loggedIn={loggedIn}
              component={
            <Movies searchMovie={handleSearch}
                cards={foundMovies}
                handleSave={handleSave}
                preloader={isPreloaderActive}
                noMovies={noMovies} handleRemove={handleRemove}
                savedMovies={savedMovies}
                handlerShortMovies={handlerShortMovies}
                shortMovies={onlyShortMovies}></Movies>
              }/>
            }/>
            <Route path="/saved-movies" element={
              <ProtectedRoute
              loggedIn={loggedIn}
              component={
                <SavedMovies
                searchMovie={savedHandleSearch}
                cards={savedMovies}
                handleSave={handleSave}
                preloader={isPreloaderActive}
                noMovies={noMovies}
                handlerShortMovies={handlerShortMovies}
                shortMovies={savedOnlyShortMovies}
                handleRemove={handleRemove}
                savedMovies={savedMovies}></SavedMovies>
              }/>
            }/>
            <Route path="/profile" element={
              <ProtectedRoute
              loggedIn={loggedIn}
              component={
                <Profile
                getInfo={handlePatchUser}
                logOut={handleLogOut}></Profile>
              }/>
            }/>
            <Route path="/signin" element={
              <Login loggedIn={loggedIn} onLogin={handleLogin} error={registerError}></Login>
            }/>
            <Route path="/signup" element={
              <Register loggedIn={loggedIn} register={handleRegister} error={registerError}></Register>
            }/>
            <Route path="*" element={
              <NotFoundPage></NotFoundPage>
            }/>
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    );

};