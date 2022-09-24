import React, { useState, useEffect } from "react";

export default function MoviesCard({saveSection, card, handleSave, handleRemove, savedMovies}) {
    // подсчет времени

    const duration = (time) => {
      const hours = Math.floor(time / 60);
      const min = time % 60;
      return `${hours > 0 ? hours + 'ч ' : ''}${min}м`;
    }

    let movieDuration = duration(card.duration)

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
      if(saveSection) {
        setIsSaved(true)
      }
    }, [])


    // сохранение фильма

    const saveHandler = (e) => {
      setIsSaved(!isSaved)
      handleSave(card);
    }

    //удаление фильма
    const removeMovie = () => {
      let id
      savedMovies.some((item) => {
        if(item._id === card._id) {
          id = item._id
        }
      })
      handleRemove(id);
      setIsSaved(!isSaved)
    }

    // определение класса для кнопки в завимсимости от странцы
    const saveButton = !saveSection ? 'active' : 'saved'

    return (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <div className="moviesCard__text-box">
                    <h2 className="moviesCard__title">{card.nameRU}</h2>
                    <p className="moviesCard__duration">{movieDuration}</p>
                </div>
                <button type="button" onClick={(e) => {isSaved ? removeMovie(e) : saveHandler(e)}} className={isSaved ? `moviesCard__save-button moviesCard__save-button_${saveButton}` : `moviesCard__save-button`}></button>
            </div>
            <a className="moviesCard__link" href={card.trailerLink} target="_ blank"><img className="moviesCard__image" src={card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image} alt="Скриншот из фильма"/></a>
        </li>
    )
};