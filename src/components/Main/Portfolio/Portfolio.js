import React from "react";

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <a target="_blank" href="https://github.com/hiksP/how-to-learn" className="portfolio__link"><li className="portfolio__item">
                    <p className="portfolio__text">Статичный сайт</p>
                    <div className="portfolio__link-image"></div>
                </li></a>
                <a target="_blank" href="https://hiksp.github.io/russian-travel/" className="portfolio__link"><li className="portfolio__item">
                    <p className="portfolio__text">Адаптивный сайт</p>
                    <div className="portfolio__link-image"></div>
                </li></a>
                <a target="_blank" href="https://plavskikh.mesto.nomoredomains.xyz/" className="portfolio__link"><li className="portfolio__item">
                    <p className="portfolio__text">Одностраничное приложение</p>
                    <div className="portfolio__link-image "></div>
                </li></a>
            </ul>
        </section>
    )
}