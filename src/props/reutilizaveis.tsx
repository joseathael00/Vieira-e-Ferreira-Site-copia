import instagram from "../assets/icon/instagram.svg";
import facebook from "../assets/icon/facebook.svg";
import localizacao from "../assets/icon/localizacao.svg";

export function BtnContact() {
  return (
    <div className="btnContainer">
      <button>
        <img src={instagram} alt="Instagram" />
      </button>
      <button>
        <img src={facebook} alt="Facebook" />
      </button>
      <button>
        <img src={localizacao} alt="Localização" />
      </button>
    </div>
  );
}

type BotaoEnvProps = {
  text: string;
};

export function BotaoEnv({ text }: BotaoEnvProps) {
  return <button className="botaoEnv">{text}</button>;
}

type FormularioProps = {
  children?: React.ReactNode;
};
export function Formulario({ children }: FormularioProps) {
  return (
    <div className="formulario">
      <h2>
        <b>Vamos conversar?</b>
      </h2>
      <p>
        Preencha o formulário abaixo com suas informações e iremos te responder
        o mais breve possível!
      </p>
      <input type="text" placeholder="Nome completo:" />
      <select>
        <option value="">Selecione seu procedimento:</option>
        <option value="dentistico">Dentístico</option>
        <option value="estetico">Estético</option>
      </select>
      <input type="text" placeholder="Deixe sua dúvida" />

      {children}
    </div>
  );
}

export default Formulario;
