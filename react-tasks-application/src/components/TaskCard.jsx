// import { TaskContext } from "../context/TaskContext";
// import { useContext } from "react";

export function TaskCard(props) {
  // console.log(props.task);

  // const valor = useContext(TaskContext);
  // console.log(valor);

  return (
    <div>
      <h1>{props.task.title}</h1>
      <p>{props.task.descripcion}</p>

      <button
        onClick={() => {
          props.deleteTask(props.task.id); //llama funcion deteleTask y le manda el id que se ha selecionado para que verifique y elemine
          // console.log(props.task.id);
        }}
      >
        Eliminar Tarea
      </button>
      {/* console.log(props.task.descripcion) */}
    </div>
  );
}

// export default TaskCard;
