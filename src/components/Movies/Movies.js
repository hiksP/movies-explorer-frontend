import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import Preloader from "./Preloader/Preloader";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { useState } from "react";

export default function Movies() {

 const [cards, setCards] = useState([])

  moviesApi.getInfo()
  .then((res) => {
    setCards(res);
  })
  .catch((err) => {
    console.log(err);
  });

  //  const sectionWithCards = () => {
  //   if (cards.length > 0) {
  //     return cards.map((cardInfo) => (
  //        <MoviesCard key={cardInfo.id} savedMovies={false} card={cardInfo} />
  //     ));
  //   }
  // };

    return (
        <>
            <Header></Header>
            <main>
              <SearchForm></SearchForm>
              <MoviesCardList section={sectionWithCards()} savedMovies={false}></MoviesCardList>
              <Preloader></Preloader>
            </main>
            <Footer></Footer>
        </>
    );
};