import React from "react";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

export default function Main({loggedIn}) {

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
              <Promo></Promo>
              <NavTab></NavTab>
              <AboutProject></AboutProject>
              <Techs></Techs>
              <AboutMe></AboutMe>
              <Portfolio></Portfolio>
            </main>
            <Footer></Footer>
        </>
    )
}