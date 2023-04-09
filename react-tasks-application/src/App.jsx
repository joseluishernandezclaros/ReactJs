import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as tareas } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tareas);
  }, []);

  function createTask(task) {
    setTasks([...tasks, task]);
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
