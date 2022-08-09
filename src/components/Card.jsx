import React from "react";
import s from "./Card.module.css";
import { useState } from "react";

export default function Card (props) {
    const [check,setCheck] = useState(false)
    const onClick = (e)=>{
        setCheck(!check)
        props.set(props.id,check)
      }

    return ( <div key={props.id} onClick={onClick} className={check?s.completada:s.incompleta}>
        <li className={props.estado}>{props.toDo}</li>
        </div>)
}