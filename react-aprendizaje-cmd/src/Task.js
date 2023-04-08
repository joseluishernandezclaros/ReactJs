import "./task.css";

export function TaskCard(props) {
  //   const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  //   const titleStyle = { fontWeight: "lighter" };

  return (
    <div className="card">
      <h1 className="">Primer Tarea</h1>
      <span className={props.ready ? "bg-green" : "bg-red"}>
        {props.ready === true ? "tarea realizada" : "tarea pendiente"}
      </span>
    </div>
  );
}
