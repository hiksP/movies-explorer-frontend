import React, { useState } from "react";
import movieImage from '../../../images/movieImage.jpg';
import SavedMovies from "../../SavedMovies/SavedMovies";

export default function MoviesCard({saved, card}) {


    const duration = (time) => {
      const hours = Math.floor(time / 60);
      const min = time % 60;
      return `${hours > 0 ? hours + 'ч ' : ''}${min}м`;
    }

    let movieDuration = duration(card.duration)

    const [isSaved, SaveMovie] = useState(false)

    const saveHandler = () => {
        SaveMovie(!isSaved)
    }


    return saved ? (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">{card.nameRU}</h2>
                    <p className="moviesCard__duration">{movieDuration}</p>
                </div>
                <button type="button" className='moviesCard__save-button moviesCard__save-button_saved '></button>
            </div>
            <img className="moviesCard__image" src={card.image.url} alt="Скриншот из фильма"/>
        </li>
    ) : (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">{card.nameRU}</h2>
                    <p className="moviesCard__duration">{movieDuration}</p>
                </div>
                <button type="button" onClick={saveHandler} className={isSaved ? `moviesCard__save-button moviesCard__save-button_active` : `moviesCard__save-button`}></button>
            </div>
            <img className="moviesCard__image" src={card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image} alt="Скриншот из фильма"/>
        </li>
    )
};