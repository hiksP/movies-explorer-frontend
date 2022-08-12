import React, { useState } from "react";
import movieImage from '../../../images/movieImage.jpg';
import SavedMovies from "../../SavedMovies/SavedMovies";

export default function MoviesCard({saved}) {
    const [isSaved, SaveMovie] = useState(false)

    const saveHandler = () => {
        isSaved ? SaveMovie(false) : SaveMovie(true);
    }


    return saved ? (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">33 слова о дизайне</h2>
                    <p className="moviesCard__duration">1ч 47м</p>
                </div>
                <button className='moviesCard__save-button moviesCard__save-button_saved '></button>
            </div>
            <img className="moviesCard__image" src={movieImage} alt="Скриншот из фильма"/>
        </li>
    ) : (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">33 слова о дизайне</h2>
                    <p className="moviesCard__duration">1ч 47м</p>
                </div>
                <button onClick={saveHandler} className={isSaved ? `moviesCard__save-button moviesCard__save-button_active` : `moviesCard__save-button`}></button>
            </div>
            <img className="moviesCard__image" src={movieImage} alt="Скриншот из фильма"/>
        </li>
    )
};