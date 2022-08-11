import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({item}) {
    return (
        <div className="moviesCardList">
            <ul className="moviesCardList__list">
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
            </ul>
        </div>
    );
};