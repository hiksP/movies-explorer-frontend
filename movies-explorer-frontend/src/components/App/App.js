import React from "react";
import Login from "../Login/Login";
import Register  from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Promo from "../Main/Promo/Promo";
import Profile from "../Profile/Profile";
import { Main } from "../Main/Main";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Movies from "../Movies/Movies";


export default function App() {
    return(
        <div className="page">
          <Movies></Movies>
        </div>
    );

};