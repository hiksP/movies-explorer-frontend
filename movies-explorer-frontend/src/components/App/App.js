import React from "react";
import Login from "../Login/Login";
import Register  from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Promo from "../Main/Promo/Promo";
import Profile from "../Profile/Profile";
import { Main } from "../Main/Main";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";


export default function App() {
    return(
        <div className="page">
          <Header></Header>
          <SearchForm></SearchForm>
        </div>
    );

};