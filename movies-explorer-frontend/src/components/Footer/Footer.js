import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <p className="footer__project-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__year">© 2020</p>
                <ul className="footer__list">
                    <li className="footer__list-item"><a href="#" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__list-item"><a href="#" className="footer__link">Github</a></li>
                    <li className="footer__list-item"><a href="#" className="footer__link">Facebook</a></li>
                </ul>
            </div>
        </div>
    );
};