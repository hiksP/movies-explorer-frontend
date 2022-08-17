import React from "react"; 
import { useState } from "react";
import search from "../../../images/search-icon.svg"


export default function SearchForm() {

    const [isSliderActive, setSliderActive] = useState(false);
    
    const sliderButton = () => {
        isSliderActive ? setSliderActive(false) : setSliderActive(true);
    }

    const [width, SetWidth] = useState(window.outerWidth);

    window.addEventListener('resize', () => {
        const windowInnerWidth = window.innerWidth
        SetWidth(windowInnerWidth)
    })
    

    return width > 450 ? (
        <div className="searchForm">
            <div className="searchForm__container">
            <img src={search} alt="лупа" className="searchForm__input-icon"></img>
                <form className="searchForm__form">
                    <input placeholder="Фильм" className="searchForm__input" type="text"></input>
                    <button className="searchForm__search-button"></button>
                </form>
                <button onClick={sliderButton} className={isSliderActive ? `searchForm__slider searchForm__slider_active` : `searchForm__slider`}>
                    <div  className={isSliderActive ? `searchForm__slider-circle searchForm__slider-circle_active` : `searchForm__slider-circle` }></div>
                </button>
                <p className="searchForm__text">Короткометражки</p>
            </div>
        </div>
    ) : (
        <div className="searchForm">
            <div className="searchForm__container">
                <form className="searchForm__form">
                    <input placeholder="Фильм" className="searchForm__input" type="text"></input>
                    <button className="searchForm__search-button"></button>
                </form>
            </div>
            <div className="searchForm__button-container">
                <button onClick={sliderButton} className={isSliderActive ? `searchForm__slider searchForm__slider_active` : `searchForm__slider`}>
                    <div  className={isSliderActive ? `searchForm__slider-circle searchForm__slider-circle_active` : `searchForm__slider-circle` }></div>
                </button>
                <p className="searchForm__text">Короткометражки</p>
            </div>
        </div>
    )
};