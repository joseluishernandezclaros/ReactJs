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

  return (
    <div>
      <TaskForm funcionTask={createTask} />
      <TaskList funcionTareas={tasks} />
    </div>
  );
}

export default App;
