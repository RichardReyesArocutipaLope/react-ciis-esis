import React from "react";
import {gsap} from 'gsap'

export const IconFlag = ({flag, i}) => {

    const rebota = () => {
        gsap.to(`.${flag.country}`,{y:-30,duration:.3,ease:'ease.out'}).then(
          ()  => { 
            gsap.to(`.${flag.country}`,{y:0 ,duration:.9,ease:'bounce.out'})
           }
        )
      }
  return (
    <img
      key={i}
      className={`flag_icon_banner ${flag.country}`}
      src={flag.icon}
      alt={flag.country}
      onMouseEnter={rebota}
    />
  );
};
