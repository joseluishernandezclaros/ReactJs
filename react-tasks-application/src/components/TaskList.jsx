import { TaskCard } from "./TaskCard";
function TaskList(props) {
  if (props.funcionTareas.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {props.funcionTareas.map((task) => {
        return <TaskCard key={task.id} task={task} />;
        // console.log(task);
        //recoorrer con map la lista de elementos
      })}
    </div>
  );
}

export default TaskList;
