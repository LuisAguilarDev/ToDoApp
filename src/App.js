import "./App.css";
import Nav from "./components/Nav.jsx";
import React, { useState } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer.jsx";

let llave = 0;

function App() {
  const [toDo, settoDo] = useState([]);
  function addToDo(input) {
    if (!input) return alert("No definío la tarea");
    const respuesta = {
      toDo: input,
      estado: "incompleta",
      id: llave,
    };
    llave++;
    settoDo((oldtoDo) => [...oldtoDo, respuesta]);
  }
  function set(id, boo) {
    let contador = 0;
    let respuesta = toDo.map((x) => {
      if (x.id === id && !boo) {
        x.estado = "completado";
        return x;
      }
      if (x.id === id && boo) {
        x.estado = "incompleta";
        return x;
      }
      return x;
    });
    (function hola() {
      toDo.map((x) => {
        if (x.estado === "completado") {
          contador++;
        }
      });
      return contador;
    })();
    if (contador === toDo.length) {
      settoDo([]);
      return alert("Felicidades has completado todas tus tareas");
    }
    settoDo(respuesta);
  }
  return (
    <div className="App">
      <div>
        <Nav addToDo={addToDo} />
        <Cards toDo={toDo} set={set} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
