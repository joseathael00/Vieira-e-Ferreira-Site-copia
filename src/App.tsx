// Estilos
import "./App.scss";
import "./styles/home.scss";
import "./styles/pag2.scss";
import "./styles/propStyle/formulario.scss";
import "./styles/pag3.scss";
// Imagens
import logo from "../src/assets/icon/logo.svg";
// Props
import { Formulario, BtnContact, BotaoEnv } from "./props/reutilizaveis.tsx";
import Carrossel from "./props/carrossel.tsx";

function App() {
  return (
    <>
      {/* Página principal */}
      <section id="home">
        <div className="container">
          <img src={logo} />
        </div>
      </section>

      {/* Página 2 */}
      <section id="pag2">
        <div className="container">
          <Formulario>
            {" "}
            <BotaoEnv text="Enviar"></BotaoEnv>
          </Formulario>
        </div>
        <div className="container">
          <h2>
            Uma clinica completa focada em proporcionar o seu melhor sorriso
          </h2>
          <br />
          <p>
            Nossa clínica foi projetada com um intuito principal: Atendê-los com
            qualidade. Aqui você tem um momento de conforto e tranquilidade e
            ainda sai com uma melhor autoestima e se sentindo realizado com
            nossos resultados!
          </p>
          <BtnContact></BtnContact>
        </div>
      </section>

      {/* Página 3 */}
      <section id="pag3">
        <div className="container">
          <h2>Somos referência odontológica em Rio Bonito - Rio de Janeiro.</h2>
          <Carrossel></Carrossel>
        </div>
      </section>
    </>
  );
}

export default App;
