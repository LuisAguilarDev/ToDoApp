import React from "react";
import Logo from "../Logo.png";
import s from "./Nav.module.css";
import Agregador from "./Agregador.jsx";

export default function Nav({addToDo}) {
  return (
    <div className={s.barrita}>
      <div className={s.arreglo}>
        <img className={s.logo} src={Logo} alt="Not Found"/>
        <p>Task Handler App</p>
      </div>
      <Agregador addToDo={addToDo}></Agregador>
      </div>
    );
};