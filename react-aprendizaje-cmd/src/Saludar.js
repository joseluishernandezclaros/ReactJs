export function Saludar({titulo,name = "un random"}) {
  console.log(titulo,name);
  // return <h1>Este es un componente</h1>
  return (<h1>{titulo}, dice {name}</h1>);
}

export function UserCard(){
    return <h1>User Card</h1>
}