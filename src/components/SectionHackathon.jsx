import React from "react";
import "./SectionHackathon.css";
import hackathonimg from "../assets/concursoProgramacion.jpeg";

export const SectionHackathon = () => {
  const imgsrc =
    "https://web.archive.org/web/20211113145810im_/https://ciistacna.com/assets/images/hackathon.jpg";

  return (
    <section className="section-hackathon__container" id="hackaton">
      <div className="section-hackathon section-xl">
        <div className="section-hackathon__info">
          <h2 className="section-hackathon__title">Concurso de programación</h2>
          <p className="section-hackathon__description">
            Concurso organizado en cada edición del CIIS, que tiene como
            finalidad promover una sana competitividad y trabajo en equipo en el
            desarrollo de algoritmos utilizando lenguajes de programación de
            modo que se impulse la capacidad analítica y comprensiva de los
            participantes.
          </p>

          <h2 className="section-hackathon__event">Fecha del evento:</h2>
          <p className="section-hackathon__description">
            De 10 de noviembre del 2022 desde las 15:00 a 18:00 hrs.
          </p>

          <h2 className="section-hackathon__event">Lugar del evento:</h2>
          <p className="section-hackathon__description">
            Laboratorio A - ESIS - UNJBG
          </p>
          <p className="section-hackathon__description"></p>

          <div className="links__programacion">
            <a
              className="button__link button__link--relative  button__link--pink"
              href="https://docs.google.com/document/d/1rH2W1trVY68AJyQvJawykbV_cKDdP7uoVmhZ6BfClwY/edit?usp=sharing"
              target="_blank"
            >
              Bases
            </a>

            <a
              className="button__link button__link--relative  button__link--pink"
              href="https://forms.gle/2UDqSeeHvYnfWNuV6"
              target="_blank"
            >
              Inscripción
            </a>
          </div>
        </div>

        <div className="multimedia">
          <div className="multimedia__sombra"></div>
          <div className="multimedia__sombra"></div>
          <div className="multimedia__media">
            <img src={hackathonimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
