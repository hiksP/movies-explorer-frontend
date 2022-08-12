import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({savedMovies}) {
    return (
        <div className="moviesCardList">
            <ul className="moviesCardList__list">
                <MoviesCard saved={savedMovies}></MoviesCard>
                <MoviesCard saved={savedMovies}></MoviesCard>
                <MoviesCard saved={savedMovies}></MoviesCard>
                <MoviesCard saved={savedMovies}></MoviesCard>
                <MoviesCard saved={savedMovies}></MoviesCard>
                <MoviesCard saved={savedMovies}></MoviesCard>
            </ul>
        </div>
    );
};