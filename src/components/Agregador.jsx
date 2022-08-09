import React, { useState } from "react";
import s from './Nav.module.css';

export default function Agregador({addToDo}){
    const [toDo,settoDo] = useState("")
    return (
        <form onSubmit={
            (e)=>{
                e.preventDefault();
                addToDo(toDo);
                settoDo("")
            }
        }>
            <input 
            type="text"
            placeholder="Nueva Tarea..."
            value={toDo}
            onChange={e => settoDo(e.target.value)}
            />
            <input className={s.btn} type="submit" value="Agregar"/>
        </form>
    )
}