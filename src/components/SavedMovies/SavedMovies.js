import React from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import MooviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";


export default function SavedMovies({cards, searchMovie, handleSave, preloader, noMovies, handleRemove, savedMovies}) {
    return(
        <>
            <Header></Header>
            <main>
              <SearchForm searchMovie={searchMovie}></SearchForm>
              <MooviesCardList cards={cards} handleRemove={handleRemove}></MooviesCardList>
              <Preloader foundmovies={cards} active={preloader} noMovies={noMovies}></Preloader>
            </main>
            <Footer></Footer>
        </>
    );
};