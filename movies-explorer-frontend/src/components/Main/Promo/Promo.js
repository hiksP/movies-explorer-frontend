import React from "react";
import landingLogo from "../../../images/landing-logo.svg";
import Header from "../../Header/Header"

export default function Promo() {
    return (
        <>
            <Header/>
            <div className="promo">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </>
    )
}