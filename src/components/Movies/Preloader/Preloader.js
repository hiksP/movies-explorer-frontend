
import React from "react";

export default function Preloader({foundmovies, active, noMovies}) {

    return(
      <section className="preloader">
        <div className={active ? `preloader__container` : `preloader__container_text`}>
            <span className={active ? `preloader__round` : `preloader__text`}>{noMovies}</span>
        </div>
      </section>
    );
};