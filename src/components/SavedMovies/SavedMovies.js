import React from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import MooviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";


export default function SavedMovies({cards, handleSave, preloader, noMovies, handleRemove, savedMovies}) {
    return(
        <>
            <Header></Header>
            <main>
              <SearchForm></SearchForm>
              <MooviesCardList cards={cards}></MooviesCardList>
              <Preloader foundmovies={cards} active={preloader} noMovies={noMovies}></Preloader>
            </main>
            <Footer></Footer>
        </>
    );
};