import React from "react";
import photo from "../../../images/photo.jpg"

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h2 className="aboutMe__title"><a name="student">Студент</a></h2>
            <div className="aboutMe__container">
                <div className="aboutMe__info-box">
                    <h3 className="aboutMe__name">Петр</h3>
                    <p className="aboutMe__brief">Фронтенд-разработчик, 21 год</p>
                    <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
 начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="aboutMe__links">
                        <a href="#" className="aboutMe__link">Facebook</a>
                        <a href="#" className="aboutMe__link">Github</a>
                    </div>
                </div>
                <img src={photo} alt="фотография" className="aboutMe__photo"></img>
            </div>
        </div>
    );
};