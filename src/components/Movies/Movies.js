import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import Preloader from "./Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function Movies({searchMovie, cards, handleSave, preloader, noMovies, handleRemove, savedMovies}) {

    return (
        <>
            <Header></Header>
            <main>
              <SearchForm searchMovie={searchMovie}></SearchForm>
              <MoviesCardList cards={cards} handleSave={handleSave} handleRemove={handleRemove} savedMovies={savedMovies}></MoviesCardList>
              <Preloader foundmovies={cards} active={preloader} noMovies={noMovies}></Preloader>
            </main>
            <Footer></Footer>
        </>
    );
};