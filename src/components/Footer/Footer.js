import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__project-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__year">© 2022</p>
                <ul className="footer__list">
                    <li className="footer__list-item"><a href="https://practicum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__list-item"><a href="https://github.com/hiksP" target="_blank" className="footer__link">Github</a></li>
                    <li className="footer__list-item"><a href="https://vk.com/ppetrucco" target="_blank" className="footer__link">VK</a></li>
                </ul>
            </div>
        </footer>
    );
};