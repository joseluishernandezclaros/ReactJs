import PropTypes from "prop-types";

export function Button({ text, name }) {
  // console.log(text); //recibir valor enviado desde la etiqueta index
  return (
    <button
      onClick={function () {
        console.log("hola mundo");
      }}
    >
      {text} - {name}
    </button>
  );
}

Button.prototype = {
  text: PropTypes.string.isRequired,
}; //configurar los props para que si o si solo reciba de tipo string

Button.defaultProps = {
  name: "Some user",
  text: "Saludar",
}; //Definir valores por defectos a objetos NO definidos
