import React from "react";

export default function AboutProject() {
    return (
        <div className="aboutProject">
            <h2 className="aboutProject__title">О проекте</h2>
            <div className="aboutProject__main-content">
                <div className="aboutProject__container">
                    <p className="aboutProject__text-big">Дипломный проект включал 5 этапов</p>
                    <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__container">
                    <p className="aboutProject__text-big">На выполнение диплома ушло 5 недель</p>
                    <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__duration-container">
                <div className="aboutProject__duration-line">
                    <div className="aboutProject__duration aboutProject__duration_back">1 неделя</div>
                    <p className="aboutProject__duration-text">Back-end</p>
                </div>
                <div className="aboutProject__duration-line">
                    <div className="aboutProject__duration">4 недели</div>
                    <p className="aboutProject__duration-text">Front-end</p>
                </div>
            </div>
        </div>
    );
};