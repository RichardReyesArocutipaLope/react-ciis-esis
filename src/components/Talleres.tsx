import React from 'react'
import { FaClock } from 'react-icons/fa';


export const Talleres = ({item}) => {
  return (
    <div key={item.id} className={`workshops-day__day`}>
    {item.talleres.map((element) => (
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
          <div className="workshops-day__buttons_container">
            {element.link && (
              <a
                className="section-workshop__card-register"
                href={element.link}
                target='_blank'
              >
                Leer más
              </a>
              
            )}
            {element.form && (
              <a
                className="section-workshop__card-register"
                href={element.form}
                target='_blank'
              >
                Registrate
              </a>
            )}
            {/* </div> */}
          </div>
          {element.photo && (
            <div className="workshops-day-description-container-img">
              <img
                className="workshops-day__description-img"
                src={element.photo}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
  )
}
