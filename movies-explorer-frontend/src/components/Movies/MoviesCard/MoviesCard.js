import React from "react";
import movieImage from '../../../images/movieImage.jpg';

export default function MoviesCard() {
    return(
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">33 слова о дизайне</h2>
                    <p className="moviesCard__duration">1ч 47м</p>
                </div>
                <button className="moviesCard__save-button moviesCard__save-button_active"></button>
            </div>
            <img className="moviesCard__image" src={movieImage} alt="Скриншот из фильма"/>
        </li>
    );
};