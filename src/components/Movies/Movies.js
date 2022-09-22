import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import Preloader from "./Preloader/Preloader";
import Footer from "../Footer/Footer";


export default function Movies({searchMovie, cards, handleSave, preloader, noMovies, handleRemove, savedMovies, handlerShortMovies, shortMovies}) {

    return (
        <>
            <Header></Header>
            <main>
              <SearchForm searchMovie={searchMovie} handlerShortMovies={handlerShortMovies} shortMovies={shortMovies}></SearchForm>
              <MoviesCardList cards={cards} handleSave={handleSave} handleRemove={handleRemove} savedMovies={savedMovies}></MoviesCardList>
              <Preloader active={preloader} noMovies={noMovies}></Preloader>
            </main>
            <Footer></Footer>
        </>
    );
};