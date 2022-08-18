import React from "react";

export default function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title"><a name="techs">Технологии</a></h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__main-container">
                <div className="techs__box">HTML</div>
                <div className="techs__box">CSS</div>
                <div className="techs__box">JS</div>
                <div className="techs__box">React</div>
                <div className="techs__box">Git</div>
                <div className="techs__box">Express.js</div>
                <div className="techs__box">mongoDB</div>
            </div>
        </section>
    );
};