import React from "react"; //importar react
import ReactDom from "react-dom"; //importar Dom
import { Doble } from "./Doble"; //importar funcion doble que esta src

const rootElement = document.getElementById("root"); //seleccionar root o raiz
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

// root.render(<h1>Hello World, Hola Mundo y Hola react</h1>); //contenido que se envia a root para mostrar

// root.render(Saludar()); //usar y mostrar funcion saludar

// root.render(
//   <div>
//     {/* <Saludar></Saludar> se pueden usar funciones como si fueran etiquetas */}
//     {/* <Saludar/>etiqueta autocerrada */}
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




root.render(
  <>
    <Doble/>
    <Doble/>
    <Doble/>
    <Doble/>
  </>
);