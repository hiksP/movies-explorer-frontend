import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import Preloader from "./Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function Movies() {
    return (
        <>
            <Header></Header>
            <SearchForm></SearchForm>
            <MoviesCardList savedMovies={false}></MoviesCardList>
            <Preloader></Preloader>
            <Footer></Footer>
        </>
    );
};