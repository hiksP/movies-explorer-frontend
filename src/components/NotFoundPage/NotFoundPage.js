import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main>
          <section className="notFound">
              <h2 className="notFound__title">404</h2>
              <p className="notFound__text">Страница не найдена</p>
              <Link to={'/'} className="notFound__link" href="#">Назад</Link>
          </section>
        </main>
    )
}