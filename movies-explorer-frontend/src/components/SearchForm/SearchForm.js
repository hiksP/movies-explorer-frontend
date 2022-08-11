import React from "react"; 
import { useState } from "react";
import search from "../../images/search-icon.svg"


export default function SearchForm() {

    const [isSliderActive, setSliderActive] = useState(false);
    
    const sliderButton = () => {
        isSliderActive ? setSliderActive(false) : setSliderActive(true);
    }
    

    return(
        <div className="searchForm">
            <div className="searchForm__container">
            <img src={search} alt="лупа" className="searchForm__input-icon"></img>
                <form className="searchForm__form">
                    <input className="searchForm__input"></input>
                    <button className="searchForm__search-button"></button>
                </form>
                <button onClick={sliderButton} className={isSliderActive ? `searchForm__slider searchForm__slider_active` : `searchForm__slider`}>
                    <div  className={isSliderActive ? `searchForm__slider-circle searchForm__slider-circle_active` : `searchForm__slider-circle` }></div>
                </button>
                <p className="searchForm__text">Короткометражки</p>
            </div>
        </div>
    );
};