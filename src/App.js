import "./App.css";
import logoContador from "./assets/logo-contador.png";
import Boton from "./components/btn";
import Contador from "./components/contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const incrementarContador = () => {
    setNumClics(numClics + 1);
  };

  const decrementarContador = () => {
    setNumClics(numClics - 1);
    if (numClics <= 0) {
      setNumClics(0);
    }
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="img-contenedor">
        <img src={logoContador} className="img-contador" alt="logo contador" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
          texto="Restar"
          botonDeClic={true}
          manejarClic={decrementarContador}
        />

        <Boton
          texto="Reiniciar"
          botonDeClic={false}
          manejarClic={reiniciarContador}
        />

        <Boton
          texto="Incrementar"
          botonDeClic={true}
          manejarClic={incrementarContador}
        />
      </div>
    </div>
  );
}

export default App;
