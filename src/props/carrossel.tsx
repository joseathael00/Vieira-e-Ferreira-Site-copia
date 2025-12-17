import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/propStyle/carrossel.scss";

import img1 from "../assets/img/atendimento.webp";
import img2 from "../assets/img/estrutura.webp";
import img3 from "../assets/img/profissionais.webp";
import img4 from "../assets/img/tecnologia.webp";

function Carrossel() {
  return (
    <Swiper
      id="carrossel"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop
      navigation
      spaceBetween={10}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={img1} alt="Atendimento" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img2} alt="Estrutura" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img3} alt="Profissionais" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img4} alt="Tecnologia" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrossel;
