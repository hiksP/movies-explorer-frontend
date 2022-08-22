import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({savedMovies, section}) {


    return (
        <section className="moviesCardList">
            <ul className="moviesCardList__list">
                {section}
            </ul>
        </section>
    );
};