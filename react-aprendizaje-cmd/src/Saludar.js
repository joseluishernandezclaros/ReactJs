export function Saludar({ titulo, name = "un random" }) {
  console.log(titulo, name);
  // return <h1>Este es un componente</h1>
  return (
    <h1>
      {titulo}, dice {name}
    </h1>
  );
}

export function UserCard(props) {
  console.log({ props });
  return (
    <div>
      <h1>{props.name}</h1>
      <p> 💰{props.amount}</p>
      <p>{props.married ? "married" : "single"}</p>
      <ul>
        <li>City:{props.address.city}</li>
        <li>Street:{props.address.street}</li>
      </ul>
    </div>
  );
}
