export function Posts() {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
        //traer datos de la url, luego cuando termine de traer datos reciba una respuesta y convertir la respuesta a json y luego recibe los datos y los muestra por consola, si el link esta mal activa el catch para avisar de un error
        //response.json() sirve para convertir datos json en datos JS
      }}
    >
      Traer Datos
    </button>
  );
}
