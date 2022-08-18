import React from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import MooviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import SearchForm from "../Movies/SearchForm/SearchForm";


export default function SavedMovies() {
    return(
        <>
            <Header></Header>
            <main>
              <SearchForm></SearchForm>
              <MooviesCardList savedMovies={true}></MooviesCardList>
            </main>
            <Footer></Footer>
        </>
    );
};