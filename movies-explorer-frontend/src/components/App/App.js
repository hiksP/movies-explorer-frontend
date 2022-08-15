import React from "react";
import Login from "../Login/Login";
import Register  from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Main  from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Routes, Route, useNavigate } from "react-router-dom";


export default function App() {

    return(
        <div className="page">
          <Routes>
            <Route path="/" element={
              <Main></Main>
            }/>
            <Route path="/movies" element={
              <Movies></Movies>
            }/>
            <Route path="/saved-movies" element={
              <SavedMovies></SavedMovies>
            }/>
            <Route path="/profile" element={
              <Profile></Profile>
            }/>
            <Route path="/signin" element={
              <Login></Login>
            }/>
            <Route path="/signup" element={
              <Register></Register>
            }/>
          </Routes>
        </div>
    );

};