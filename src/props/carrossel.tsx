import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/propStyle/carrossel.scss";

import img1 from "../assets/img/atendimento.webp";
import img2 from "../assets/img/estrutura.webp";
import img3 from "../assets/img/profissionais.webp";
import img4 from "../assets/img/tecnologia.webp";

function Carrossel() {
  return (
    <Swiper
      id="carrossel"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      loop
      navigation
      spaceBetween={10}
      pagination={{ clickable: true }}
      autoplay={false} // 👈 força desligar
    >
      <SwiperSlide>
        <img src={img1} alt="Atendimento" />
        <div className="sl">
          <h2>Atendimento de qualidade</h2>
          <p>
            A Clínica Vieira Ferreira surgiu do sonho da Dra. Vanessa Ferreira
            em exercer a sua profissão oferecendo qualidade técnica e
            atendimento de excelência aos seus pacientes, há mais de 27 anos, em
            Rio Bonito - RJ.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={img2} alt="Estrutura" />
        <div className="sl">
          <h2>Estrutura Moderna</h2>
          <p>
            A Clínica Odontológica Vieira Ferreira foi projetada para oferecer o
            melhor atendimento odontológico, contamos com uma estrutura
            diferenciada desde a recepção até as salas clínicas, com
            equipamentos de alta tecnologia que acompanham os avanços da
            odontologia moderna.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={img3} alt="Profissionais" />
        <div className="sl">
          <h2>Profissionais qualificados</h2>
          <p>
            Contamos com uma equipe de profissionais capacitados para realizar o
            melhor atendimento, desde a recepção à sala do dentista. Nos
            preocupamos em oferecer o melhor atendimento para os nossos
            pacientes e melhor tratamento com dentistas especializados.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={img4} alt="Tecnologia" />
        <div className="sl">
          <h2>Tecnologia Avançada</h2>
          <p>
            Possuímos equipamentos de última geração como o Itero®, Panorâmico
            e RX Digital para garantir que todos tratamentos e exames possam ser
            realizados de forma segura e para melhor atender aos nossos
            pacientes.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrossel;
