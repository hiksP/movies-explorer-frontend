import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cards, handleSave, handleRemove, savedMovies}) {

  const [morePosts, setMorePosts] = useState(0)
  const [counter, addCounter] = useState(0);
  window.addEventListener('resize', () => {
    setTimeout(displayWidthCheck, 1000)
  })
  const [saveSection, setSaveSection] = useState(false)
  const [idArray, setIdArray] = useState([])
  const path = document.location.pathname;

  useEffect(() => {
    if(path === '/saved-movies') {
      setSaveSection(true)
    } else {
      setSaveSection(false)
    }
  }, [])

  useEffect(() => {
    let idArray = []
    savedMovies.forEach((el) => {
      idArray.push(el.movieId);
    })
    setIdArray(idArray);
  }, [savedMovies])

  const displayWidthCheck = () => {
    const display = window.innerWidth;
    if(display > 1900) {
      addCounter(12);
      setMorePosts(4);
    }
      else if (display > 1279) {
      addCounter(12);
      setMorePosts(3);
    } else if (display > 769) {
      addCounter(8);
      setMorePosts(2);
    } else if (display < 660) {
      addCounter(5);
      setMorePosts(1);
    }
}

useEffect(() => {
    displayWidthCheck();
}, []);

  const handlerShowPosts = () => {
    addCounter(counter + morePosts);
  }


    return (
        <section className="moviesCardList">
            <ul className="moviesCardList__list">
                {cards.slice(0, counter).map((card) => {
                  return <MoviesCard key={card.id || card._id} saveSection={saveSection} card={card} _id={card._id} handleSave={handleSave} handleRemove={handleRemove} savedMovies={savedMovies} idArray={idArray}></MoviesCard>
                })}
            </ul>
            <button className={!(cards.length < counter + 1) ? `moviesCardList__button` : `moviesCardList__button moviesCardList__button_unactive`} onClick={handlerShowPosts}>Ещё</button>
        </section>
    )
};