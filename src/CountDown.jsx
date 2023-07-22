import { useEffect, useState } from 'react';
import './App.css';
export const CountDown = () => {
  const [getCounter, setGetCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getRemainingTime = (deadline) => {
    let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000,
      remainDays = Math.floor(remainTime / (3600 * 24)),
      remainHours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2),
      remainMinutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2),
      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);

    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime,
    };
  };
  useEffect(() => {
    const timerUpdate = setInterval(() => {
      let getTime = getRemainingTime('Nov 07 2022 16:00:00 GMT-0500');
      setGetCounter({
        days: getTime.remainDays,
        hours: getTime.remainHours,
        minutes: getTime.remainMinutes,
        seconds: getTime.remainSeconds,
      });
      if (getTime.remainTime <= 1) {
        clearInterval(timerUpdate);
      }
    }, 1000);
  }, []);

  return (
    <div className="event__date">
      <div className="date">
        <span className="date__custom">
          {getCounter.days} <span className="dop">:</span>
        </span>
        <span className="date__text">Días</span>
      </div>
      <div className="date">
        <span className="date__custom">
          {getCounter.hours} <span className="dop">:</span>
        </span>
        <span className="date__text">Horas</span>
      </div>
      <div className="date">
        <span className="date__custom">
          {getCounter.minutes} <span className="dop">:</span>
        </span>
        <span className="date__text">Minutos</span>
      </div>
      <div className="date">
        <span className="date__custom">{getCounter.seconds} </span>
        <span className="date__text">Segundos</span>
      </div>
    </div>
  );
};
