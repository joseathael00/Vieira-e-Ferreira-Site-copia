// Estilos
import "./App.scss";
import "./styles/home.scss";
import "./styles/pag2.scss";
import "./styles/propStyle/formulario.scss";
import "./styles/pag3.scss";
import "./styles/pag4.scss";
import "./styles/pag5.scss";

// Imagens
import logo from "../src/assets/icon/logo.svg";
import sobre from "./assets/img/sobre.webp";

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
          <h2 id="titulo">
            Somos referência odontológica em Rio Bonito - Rio de Janeiro.
          </h2>
          <Carrossel></Carrossel>
        </div>
      </section>

      {/* Página 4 */}
      <section id="pag4">
        <div className="container">
          <p>
            <h2>
              <b>O cuidado que seu sorriso merece</b>
            </h2>
            A clínica odontológica Vieira Ferreira foi projetada para oferecer o
            melhor atendimento odontológico, contamos com uma estrutura
            diferenciada desde a recepção até as salas clínicas, com
            equipamentos de alta tecnologia que acompanham os avanços da
            odontologia moderna. Através de uma odontologia contemporânea
            podemos resolver seus problemas com longevidade, valorizando a
            estética de seu sorriso sem deixar de lado a saúde e a função
            mastigatória que são extremamente importantes.
          </p>

          <img src={sobre} />
          <BotaoEnv text="Quero Saber mais"></BotaoEnv>
        </div>
      </section>

      {/* Página 5 */}
      <section id="pag4">
        <div className="container">
          <h2>
            <b>O melhor tratamento está aqui para você.</b>
          </h2>
        </div>
      </section>
    </>
  );
}

export default App;
