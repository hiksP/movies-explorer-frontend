import React from "react";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <p className="portfolio__text">Статичный сайт</p>
                    <a href="#" className="portfolio__link-image"></a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__text">Адаптивный сайт</p>
                    <a href="#" className="portfolio__link-image"></a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__text">Одностраничное приложение сайт</p>
                    <a href="#" className="portfolio__link-image "></a>
                </li>
            </ul>
        </div>
    )
}