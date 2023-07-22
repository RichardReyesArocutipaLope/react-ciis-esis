import React from 'react';
import { FaClock } from 'react-icons/fa';
import { SiGooglecalendar } from 'react-icons/si';

export const Ponencias = ({ element }) => {
  return (
    <div key={element.title} className="calendar-day__item">
      <h2 className="calendar-day__title">{element.title}</h2>
      <div className="calendar-day__description-container">
        <p className="calendar-day__description">{element.description}</p>
        <img
          className="calendar-day__description-img"
          src={element.photo}
          alt=""
        />
      </div>
      <div className="calendar-day__date-container">
        <span className="calendar-day__date-icon">
          <FaClock />
        </span>
        <span className="calendar-day__date">{element.date}</span>
      </div>
      {element.presencial ? (
        <div className="presencial">
          <a
            href={element.calendar}
            target="_blank"
            className="calendar-day__date-icon--calendar"
          >
            <SiGooglecalendar />
          </a>
          <p>Presencial</p>
        </div>
      ) : (
        <div className="presencial">
          <a
            href={element.calendar}
            target="_blank"
            className="calendar-day__date-icon--calendar"
          >
            <SiGooglecalendar />
          </a>
          <p>Virtual</p>  
        </div>
      )}
    </div>
  );
};
