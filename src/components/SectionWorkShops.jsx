import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import angular from "../assets/angular.png";
import drone_img from "../assets/drone_img.png";
import logo_nvidia from "../assets/logo_nvidia.png";
import "./SectionWorkShops.css";

export const SectionWorkShops = () => {
  const ViewDays = [
    {
      day: "Día 2",
      date: "08-11-2022",
      data: [
        {
          date: "10:30 - 13:00",
          title: "Creacion de aplicaciones web con Angular",
          description:
            "Se aprendera como crear una aplicación web con Angular, una aplicación SPA(Single Page Application), utilizando angular material para el diseño, se aprenderá como crear componentes, módulos, servicios, comunicación con apis rest, routes, ejecución de test con ng test; aplicación de patrones de diseño para el desarrollo web.",
          prerequisite: "- Pre-requisitos: Conocimeintos en typescript, html.",
          certifcate: "- Software a utilizar: Angular, Node Js, Visual Code.",
          link: "",
          photo: angular,
          form: "https://forms.gle/YHfheYUKKkNYtTNK8",
          presencial: true,
        },
      ],
      id: 1,
    },
    {
      day: "Día 3",
      date: "09-11-2022",
      data: [
        {
          date: "11:30 - 16:00",
          title:
            "Fundamentos de Deep Learning - Taller del Deep Learning Institute de NVIDIA (Presencial)",
          description:
            "Aprenderás cómo funciona el deep learning mediante ejercicios prácticos de visión de computación. Entrenarás modelos de deep learning desde cero, herramientas de aprendizaje y trucos para lograr resultados altamente precisos. También aprenderás a aprovechar los modelos de vanguardia, previamente entrenados y disponibles de forma gratuita para ahorrar tiempo y ejecutar rápidamente tu aplicación de deep learning. Brindado por un Instructor Certificado del DLI de NVIDIA.",
          prerequisite:
            "- Pre-requisitos: Python, Pandas, comprender cómo calcular una regresión lineal.",
          certifcate:
            "- Certificación del DLI de NVIDIA al superar la evaluación.",
          link: "https://www.nvidia.com/en-us/training/instructor-led-workshops/fundamentals-of-deep-learning/",
          photo: logo_nvidia,
          form: "https://forms.gle/2FkCrT6vaVWWs57y7",
          presencial: true,
        },
      ],
      id: 2,
    },
    {
      day: "Día 4",
      date: "10-11-2022",
      data: [
        {
          date: "11:30 - 14:00",
          title: "Taller de drones",
          description:
            "En este taller práctico, el participante aprenderá el manejo básico del drone, su tecnología digital y su potencial para distintos campos aplicativos. Conocerá los recursos narrativos y visuales para filmar y crear videos, reportajes, video clips, documentales y escenas de ficción.",
          photo: drone_img,
          presencial: true,
          form: "https://forms.gle/h3GrwHJBrEw9JiHd8",
          link: "https://forms.gle/h3GrwHJBrEw9JiHd8",
        },
      ],
      id: 3,
    },
  ];

  const days = [
    {
      day: "Día 2",
      date: "08-11-2022",
      id: 1,
    },
    {
      day: "Día 3",
      date: "09-11-2022",
      id: 2,
    },
    {
      day: "Día 4",
      date: "10-11-2022",
      id: 3,
    },
  ];

  const [viewDay, setViewDay] = useState(1);

  const onclickDay = (id) => {
    setViewDay(id);
  };

  return (
    <section className="section-workshops__background" id="talleres">
      <div className="section-workshops__title">
        <h2>Talleres</h2>
      </div>
      <div>
        <nav className="workshops-nav">
          <ul className="workshops-nav__list">
            {days.map((item, i) => (
              <li key={i} className="workshops-nav__item">
                <a
                  className={`workshops-nav__link ${
                    viewDay === item.id ? "workshops-nav__link--active" : ""
                  }`}
                  onClick={() => {
                    onclickDay(item.id);
                  }}
                >
                  {item.day}
                  <span>{item.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="workshops-day__container">
        <div className="workshops-day section-xl">
          {ViewDays.map((item) => {
            if (viewDay === item.id) {
              return (
                <div key={item.id} className={`workshops-day__day`}>
                  {item.data.map((element) => (
                    <div key={element.title} className="workshops-day__item">
                      <h2 className="workshops-day__title">{element.title}</h2>
                      <div className="workshops-day__date-container">
                        <span className="workshops-day__date-icon">
                          <FaClock />
                        </span>
                        <span className="workshops-day__date">
                          {element.date}
                        </span>
                      </div>
                      <div className="workshops-day__description-container">
                        <p className="workshops-day__description">
                          {element.description}
                        </p>
                        <div className="workshops-day__description-container">
                          <p className="workshops-day__description">
                            {element.prerequisite}
                          </p>
                        </div>
                        <p className="workshops-day__description">
                          {element.certifcate}
                        </p>
                        {element.photo && (
                          <div className="workshops-day-description-container-img">
                            <img
                              className="workshops-day__description-img"
                              src={element.photo}
                              alt=""
                            />
                          </div>
                        )}
                        <div className="workshops-day__buttons_container">
                          {element.link && (
                            <a
                              className="section-workshop__card-register"
                              href={element.link}
                              target="_blank"
                            >
                              Leer más
                            </a>
                          )}
                          {element.form && (
                            <a
                              className="section-workshop__card-register"
                              href={element.form}
                              target="_blank"
                            >
                              Registrate
                            </a>
                          )}
                          {/* </div> */}
                        </div>
                      </div>

                      {element.presencial ? (
                        <div className="presencial">Presencial</div>
                      ) : (
                        <div className="presencial">Virtual</div>
                      )}
                    </div>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* <div className="section-workshop__cards section-xl">
        {workshops.map((item, i) => (
          <div key={i} className="section-workshop__card">
            <div className="section-workshop__card-img">
              <img
                src="https://rstheme.com/products/wordpress/evenio/wp-content/uploads/2021/05/4.jpg"
                alt=""
              />
              <div className="section-workshop__card-date">
                <span>{item.dateDay}</span>
                {item.dateMonth}
              </div>
            </div>
            <div className="section-workshop__card-info">
              <div className="section-workshop__card-hour">{item.hour}</div>
              <div className="section-workshop__card-text">{item.title}</div>
              <div className="section-workshop__card-more">Leer más</div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};
