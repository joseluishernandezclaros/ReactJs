export function TaskCard(props) {
  // console.log(props.task);
  return (
    <div>
      <h1>{props.task.title}</h1>
      <p>{props.task.descripcion}</p>
      {/* console.log(props.task.descripcion) */}
    </div>
  );
}

// export default TaskCard;
