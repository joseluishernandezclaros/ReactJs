export function TaskCard(props) {
  // console.log(props.task);

  return (
    <div>
      <h1>{props.task.title}</h1>
      <p>{props.task.descripcion}</p>

      <button
        onClick={() => {
          props.deleteTask(props.task.id);
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
