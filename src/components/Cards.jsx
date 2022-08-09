import React from "react";
import Card from "./Card.jsx";
import s from "./Card.module.css";

export default function Cards({toDo,set}){
    if(toDo){
    return (
        <div className={s.cards}>
        {toDo.map((n,i) => 
            <Card
            toDo={n.toDo}
            estado={n.estado}
            key={i}
            id={i}
            set={set}
            />)}
        </div>
        )
    } else {return "No hay tareas"}
}