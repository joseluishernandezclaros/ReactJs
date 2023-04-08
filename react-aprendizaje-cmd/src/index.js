import React from "react"; //importar react
import ReactDom from "react-dom/client"; //importar Dom
// import { Doble } from "./Doble"; //importar función doble que esta src
// import { Saludar, UserCard } from "./Saludar";
// import Product, { Navbar } from "./Product";
// import { Button } from "./Button";
// import { TaskCard } from "./Task";
// import { ClaseSaludar } from "./ClaseSaludar";
import { Posts } from "./Posts";

const rootElement = document.getElementById("root"); //seleccionar root o raíz
const root = ReactDom.createRoot(rootElement); //crear componente root

// function Saludar() {
//   // return <h1>Este es un componente</h1>
//   return (
//     <div>
//       <h1>Este es un componente</h1>
//       <p>lorem 123</p>
//     </div>
//   );
// }

// root.render(<h1>Hello World, Hola Mundo y Hola react</h1>); //contenido que se envía a root para mostrar

// root.render(Saludar()); //usar y mostrar función saludar

// root.render(
//   <div>
//     {/* <Saludar></Saludar> se pueden usar funciones como si fueran etiquetas */}
//     {/* <Saludar/>etiqueta auto cerrada */}
//     <Saludar/>
//     <Saludar/>
//     <Saludar/>
//     <Saludar/>
//   </div>
// ); //

// function JSX() {
// const name = 'fazt';
// const name1 = 30;
// return <h1>{name}<br></br>{name1+name1}</h1>
// const married = true;
// if(married){
//     return <h1>Estoy casado</h1>
// }else{
//     return <h1>No estoy casado</h1>
// }

//   const married = true;
//   // return married ? <h1>Estoy casado</h1> : <h1>No estoy casado</h1>
//   return <h1>{married ? "Estoy casado 😁" : "No estoy casado 🙃"} </h1>;
// }

// root.render(<JSX />);

// function Objetos() {
//   const user = {
//     firstName: "ryan",
//     lastName: "ray",
//   };
//   // return <h1>{JSON.stringify(user)}</h1>;
//   // JSON.stringify() convertir objeto de JS en su version String

//   return (
//     <>
//       <h1>{user.firstName}</h1>
//       <h3>{user.lastName}</h3>
//     </>
//   );
// }

// root.render(
//   <>
//     <Objetos />
//     <Objetos />
//     <Objetos />
//     <Objetos />
//   </>
// );

// root.render(
//   <>
//     <Doble/>
//     <Doble/>
//     <Doble/>
//     <Doble/>
//   </>
// );

// const handleChange = (e) => {
//   console.log(e.target.value);
// };

root.render(
  <>
    {/* <Doble />
    <Saludar titulo="hola mundo" name="Joe" />
    <Saludar titulo="hola react" name="ryan" />
    <Saludar titulo="hola JSX" />
    <Saludar titulo="hola JavaScript" />
    <Saludar titulo="hola Fazt" />
    <Product />
    <Navbar />
    <br></br>
    <hr></hr> */}
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      // greet={function () {
      //   alert("Hello");
      //   // No funciona muy bien que digamos
      // }}
    /> */}
    {/* <UserCard
      name="Joe Mcmillon"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{
        street: "av some 123",
        city: "New York",
      }}
    /> */}
    {/* <Button text="Click me" />
    <Button text="Pay" />
    <Button text=" " name="Joe" /> */}
    {/* <TaskCard ready={true} />
    <TaskCard ready={false} />
    <ClaseSaludar />
    <Button
      id="hola"
      onChange={handleChange}
      onDoubleClick={() => {
        console.log("Doble click");
      }}
      // onChange={function (e) {
      //   console.log(e.target.value + "....");
      //   // console.log("Escribiendo en el input");
      // }}
    /> */}
    {/* <form
      onSubmit={(e) => {
        //funciona como el submite normal de un form de html
        e.preventDefault(); //evita que haga su comportamiento por defecto
        console.log("Enviado");
      }}
    >
      <h1>Registro de usuarios</h1>
      <button>Send</button>
    </form> */}
    <Posts />
  </>
);
