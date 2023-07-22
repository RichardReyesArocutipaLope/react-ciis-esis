import React from "react";
import "./SectionDetails.css";

import BannerOficialCIIS from "../assets/download/Banner-Oficial-CIIS.png";

export const SectionDetails = () => {
  return (
    <section className="section-details__container" id="details">
      <div className="section-details section-xl">
        <div className="multimedia">
          <div className="multimedia__sombra"></div>
          <div className="multimedia__sombra"></div>
          <div className="multimedia__media">
            <iframe
              src="https://www.youtube.com/embed/SR0AvE37H7I"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="section-details__description">
          <h2>Acerca del evento</h2>
          <div className="line"></div>
          <p>
            El Círculo de Estudios de la ESIS junto con los estudiantes de la
            XXVIII Promoción de la Escuela Profesional de Ingeniería en
            Informática y Sistemas organizan el XXIII Congreso Internacional de
            Informática y Sistemas con el fin de brindarle una gama de
            conocimientos, se realizara trascendentales conferencias magistrales
            relacionadas con la carrera, para ello contamos con renombrados
            profesionales de alta calidad humana – científica, que se
            desenvuelven en el ámbito empresarial y académico tanto a nivel
            nacional como internacional, que nos expondrán y orientarán
            sostenidos en sus experiencias, temas de actualidad y las novedades
            en que incurrirá nuestra especialidad como eje solucionador de los
            diferentes problemas que emergen en la región, país y el mundo.
          </p>
          <div className="details__count">
            <div className="details__count-item">
              <img
                className="details__count-image"
                src="https://rstheme.com/products/wordpress/evenio/wp-content/uploads/2021/09/megaphone.png"
                alt="image"
              />
              <div className="details__count-text">
                <div className="details__count-number">
                  <span>18</span>
                  <span></span>
                </div>
                <span className="count-title">Ponentes</span>
              </div>
            </div>
            <div className="de">de</div>
            <div className="details__count-item">
              <img
                className="details__count-image"
                src="https://rstheme.com/products/wordpress/evenio/wp-content/uploads/2021/09/goal.png"
                alt="image"
              />
              <div className="details__count-text">
                <div className="details__count-number">
                  <span>11</span>
                  <span></span>
                </div>
                <span className="count-title">paises</span>
              </div>
            </div>
          </div>
          <a
            className="button__link button__link--relative  button__link--pink"
            href={BannerOficialCIIS}
            download
          >
            Descargar Banner
          </a>
        </div>
      </div>
    </section>
  );
};
