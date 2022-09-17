import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cards}) {

  const [posts, setPosts] = useState([])
  const [morePosts, setMorePosts] = useState(0)
  const [counter, addCounter] = useState(0);


  const displayWidthCheck = () => {
    const display = window.innerWidth;
    if(display > 1900) {
      addCounter(12);
      setMorePosts(4);
    }
      else if (display > 1279) {
      addCounter(12)
      setMorePosts(3)
    } else if (display > 769) {
      addCounter(8)
      setMorePosts(2)
    } else if (display < 769) {
      addCounter(5)
      setMorePosts(2)
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
                  return <MoviesCard key={card.id} saved={false} card={card}></MoviesCard>
                })}
            </ul>
            <button className={cards.length >= 3 ? `moviesCardList__button` : `moviesCardList__button moviesCardList__button_unactive`} onClick={handlerShowPosts}>Ещё</button>
        </section>
    );
};