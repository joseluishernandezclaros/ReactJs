import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as tareas } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tareas);
  }, []);

  function createTask(title, descripcion) {
    // console.log(title, descripcion);
    setTasks([
      ...tasks,
      {
        title: title,
        id: tasks.length,
        descripcion: descripcion,
      },
    ]);
    // setTasks([...tasks, task]); //agarrar el objeto tasks y copiarlo en una nueva variable llamada task con la finalidad de usar los elementos ya existentes y agregarle unos nuevos sin modificar la variable original
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); //llega el id pulsado en el boton eleminar por taskID  y se verifica los valores que son diferentes al id con la finalidad de NO eliminarlos, los que den false es decir que su id es igual al id que llego por taskID ese elemento del objeto se elimina.
    // setTasks(tasks.filter((task) => {
    //   return (task.id !== taskId)
    // }));
    // console.log(tasks[0].id);
    // console.log();
    // console.log(taskId);
  }

  return (
    <div>
      <TaskForm funcionTask={createTask} />
      <TaskList funcionTareas={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
