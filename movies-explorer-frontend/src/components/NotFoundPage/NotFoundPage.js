import React from "react";

export default function NotFoundPage() {
    return (
        <div className="notFound">
            <h2 className="notFound__title">404</h2>
            <p className="notFound__text">Страница не найдена</p>
            <a className="notFound__link" href="#">Назад</a>
        </div>        
    )
}