import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cards}) {


    return (
        <section className="moviesCardList">
            <ul className="moviesCardList__list">
                {cards.map((card) => {
                  return <MoviesCard saved={false} card={card}></MoviesCard>
                })}
            </ul>
        </section>
    );
};