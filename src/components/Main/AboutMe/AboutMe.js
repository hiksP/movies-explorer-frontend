import React from "react";
import photo from "../../../images/photo.jpg"

export default function AboutMe() {
    return (
        <section className="aboutMe">
            <h2 className="aboutMe__title"><a name="student">Студент</a></h2>
            <img src={photo} alt="фотография" className="aboutMe__photo aboutMe__photo_mobile"></img>
            <div className="aboutMe__container">
                <div className="aboutMe__info-box">
                    <h3 className="aboutMe__name">Петр</h3>
                    <p className="aboutMe__brief">Фронтенд-разработчик, 21 год</p>
                    <p className="aboutMe__text">Я начал свой путь в веб-разработке совершенно случайно. Мой друг случайно что-то упомянул про
                                                  веб-разработку во время разговора, и мне стало интересно. Дома я посмотрел пару видео на ютюбе,
                                                  попытался что-то сверстать по гайдам. Мне сразу же понравилось, что я могу видеть, во что я
                                                  вложил свое время и свой труд.
                                                  Потом, конечно же, пришлось познакомиться с Javascript, и тут уже было намного тяжелее. Для
                                                  того, чтобы стать веб-разработчиком я вкладываю много сил: освежаю базу в голове по учебникам,
                                                  например learn.javascript.ru, решаю задачи на codewars, пытаюсь оптимизировать свой код, ну и
                                                  конечно же, куда без гайдов и видео на ютюбе…
</p>
                    <div className="aboutMe__links">
                        <a target="_blank" href="https://vk.com/ppetrucco" className="aboutMe__link">VK</a>
                        <a target="_blank" href="https://github.com/hiksP" className="aboutMe__link">Github</a>
                    </div>
                </div>
                <img src={photo} alt="фотография" className="aboutMe__photo"></img>
            </div>
        </section>
    );
};