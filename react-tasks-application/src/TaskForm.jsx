import React, { useState } from "react";

function TaskForm(props) {
  const [title, settitle] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault(); //funcion para que lo que se muestra en consola se mantenga ahi y no desaparesca durante la carga del submit
    props.funcionTask(title);

    // props.createTask(newTask);
    // return props.crearTask(newTask);
    // console.log(newTask);
    // props.createTask(newTask);
    //al llamar a newTask entre parentesis se envia a el archivo App.jsx con el titul que se halla escrito en el input y luego la funcion createTask obtiene el objeto de tasks.js y le agrega un nuevo elemento con lo que se escribio en el input
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          settitle(e.target.value); //definir el valor de lo que se escribe en el input a la variable title del useState
        }}
      ></input>
      <button>Guardar</button>
      {/* <hr></hr> */}
    </form>
  );
}

export default TaskForm;
