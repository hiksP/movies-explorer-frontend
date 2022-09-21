import React, { useState } from "react";

export default function MoviesCard({saved, card, handleSave, handleRemove, savedMovies}) {

    const duration = (time) => {
      const hours = Math.floor(time / 60);
      const min = time % 60;
      return `${hours > 0 ? hours + 'ч ' : ''}${min}м`;
    }

    let movieDuration = duration(card.duration)

    const [isSaved, setIsSaved] = useState(false);

    const saveHandler = (e) => {
      setIsSaved(!isSaved)
      handleSave(card);
    }

    const removeMovie = () => {
      let id
      savedMovies.some((item) => {
        if(item.movieId === card.id) {
          id = item._id
        }
      })
      handleRemove(id);
      setIsSaved(!isSaved)
    }


    return saved ? (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">{card.nameRU}</h2>
                    <p className="moviesCard__duration">{movieDuration}</p>
                </div>
                <button type="button" onClick={(e) => {isSaved ? removeMovie(e) : saveHandler(e)}} className={isSaved ? `moviesCard__save-button moviesCard__save-button_saved ` : `moviesCard__save-button`}></button>
            </div>
            <a className="moviesCard__link" href={card.trailerLink} target="_ blank"><img className="moviesCard__image" src={card.image.url} alt="Скриншот из фильма"/></a>
        </li>
    ) : (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">{card.nameRU}</h2>
                    <p className="moviesCard__duration">{movieDuration}</p>
                </div>
                <button type="button" onClick={(e) => {isSaved ? removeMovie(e) : saveHandler(e)}} className={isSaved ? `moviesCard__save-button moviesCard__save-button_active` : `moviesCard__save-button`}></button>
            </div>
            <a className="moviesCard__link" href={card.trailerLink} target="_ blank"><img className="moviesCard__image" src={card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image} alt="Скриншот из фильма"/></a>
        </li>
    )
};