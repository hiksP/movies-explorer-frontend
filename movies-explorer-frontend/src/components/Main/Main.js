import React from "react";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import { NavTab } from "./NavTab/NavTab";
import { AboutProject } from "./AboutProject/AboutProject";

export function Main() {
    return (
        <>
            <Header main={true}/>
            <Promo></Promo>
            <NavTab></NavTab>
            <AboutProject></AboutProject>
        </>
    )
}