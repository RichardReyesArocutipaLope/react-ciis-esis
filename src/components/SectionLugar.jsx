import React from "react";
import imgsrc from "../assets/auditorio.jpeg";
import chistemas from "../assets/auditorio-chistemas.jpeg";
import "./SectionLugar.css";

export const SectionLugar = () => {
  return (
    <section className="section-lugar__container" id="efe">
      <div className="section-hackathon section-xl">
        <div className="section-hackathon__info">
          <h2 className="section-hackathon__title">Lugar</h2>
          <p className="section-hackathon__description">
            Este es un evento híbrido, <b>TODAS</b> las ponencias (presenciales y
            virtuales) serán transmitidas por nuestras redes sociales.<br/> <br/>  Las
            ponencias presenciales tendrán lugar los días 07 y 11 de noviembre
            de 2022 en el Auditorio Central de la UNJBG.<br/> <br/> Las ponencias virtuales
            tendrán lugar los días 08, 09 y 10 de noviembre de 2022 en el
            Auditorio de Educación de la UNJBG. <br/> <br/>Nuestros Concursos y Talleres se
            llevarán a cabo de forma presencial.
          </p>
          <h2 className="section-hackathon__event">Fecha del evento:</h2>
          <p className="section-hackathon__description">
            Del 07 al 11 de noviembre del 2022
          </p>
        </div>

        <div className="multimedia">
          <div className="multimedia__sombra"></div>
          <div className="multimedia__sombra"></div>
          <div className="multimedia__media">
            <img src={imgsrc} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
