import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, settitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  // const valor = useContext(TaskContext);
  // console.log(valor);

  const manejarSubmit = (e) => {
    e.preventDefault(); //funcion para que lo que se muestra en consola se mantenga ahi y no desaparesca durante la carga del submit

    createTask(title, descripcion);
    // props.createTask(newTask);
    // return props.crearTask(newTask);
    // console.log(newTask);
    // props.createTask(newTask);
    //al llamar a newTask entre parentesis se envia a el archivo App.jsx con el titul que se halla escrito en el input y luego la funcion createTask obtiene el objeto de tasks.js y le agrega un nuevo elemento con lo que se escribio en el input

    settitle(""); //setear los hooks como vacios luego de enviarlos
    setDescripcion(""); //setear los hooks como vacios luego de enviarlos
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          settitle(e.target.value); //definir el valor de lo que se escribe en el input a la variable title del useState
        }}
        value={title} //limpiar el formulario
        autoFocus
      ></input>
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        value={descripcion} //limpiar el formulario
      ></textarea>
      <button>Guardar</button>
      {/* <hr></hr> */}
    </form>
  );
}

export default TaskForm;
