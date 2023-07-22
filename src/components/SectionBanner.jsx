import React from 'react';
import { Link as Scroll } from 'react-scroll';
import backgroundbanner from '../assets/background/banner_1.jpg';
import logo from '../assets/logo.png';
import './SectionBanner.css';

import { FaFacebook, FaYoutube } from 'react-icons/fa';

// Icons flags
import icon_australia from '../assets/flags-icons-svg-banner/australia-svgrepo-com.svg';
import icon_brazil from '../assets/flags-icons-svg-banner/brazil-svgrepo-com.svg';
import icon_chile from '../assets/flags-icons-svg-banner/chile-svgrepo-com.svg';
import icon_cuba from '../assets/flags-icons-svg-banner/cuba-svgrepo-com.svg';
import icon_japon from '../assets/flags-icons-svg-banner/japan-svgrepo-com.svg';
import icon_mexico from '../assets/flags-icons-svg-banner/mexico-svgrepo-com.svg';
import icon_netherlands from '../assets/flags-icons-svg-banner/netherlands-svgrepo-com.svg';
import icon_peru from '../assets/flags-icons-svg-banner/peru-svgrepo-com.svg';
import icon_spain from '../assets/flags-icons-svg-banner/spain-svgrepo-com.svg';
import icon_uk from '../assets/flags-icons-svg-banner/united-kingdom-svgrepo-com.svg';
import icon_usa from '../assets/flags-icons-svg-banner/united-states-svgrepo-com.svg';
import { IconFlag } from './IconFlag';
import { CountDown } from '../CountDown';

const SectionBanner = () => {
  let status = false;

  const flags = [
    {
      country: 'UnitedStates',
      icon: icon_usa,
    },
    {
      country: 'Mexico',
      icon: icon_mexico,
    },
    {
      country: 'Cuba',
      icon: icon_cuba,
    },
    {
      country: 'Peru',
      icon: icon_peru,
    },
    {
      country: 'Chile',
      icon: icon_chile,
    },
    {
      country: 'Brazil',
      icon: icon_brazil,
    },
    {
      country: 'Spain',
      icon: icon_spain,
    },
    {
      country: 'UnitedKingdom',
      icon: icon_uk,
    },
    {
      country: 'Netherlands',
      icon: icon_netherlands,
    },
    {
      country: 'Japon',
      icon: icon_japon,
    },
    {
      country: 'Australia',
      icon: icon_australia,
    },
  ];

  return (
    <section
      className="main-banner__fondo"
      id="inicio"
      style={{ backgroundImage: `url(${backgroundbanner})` }}
    >
      <div className="main-banner">
        <a className="main-logo main-logo__banner" href="#">
          <img
            className="main-logo__img"
            src={logo}
            alt="Logo-esis-postmaster"
          />
        </a>
        <div className="main-title">
          <div className="flags_banner">
            {flags.map((flag, i) => {
              return <IconFlag key={i} flag={flag} i={i} />;
            })}
          </div>
          <h1>XXIII CONGRESO INTERNACIONAL DE INFORMÁTICA Y SISTEMAS</h1>
          <div className="main-details">
            {/* <p>Se desarrollara en el auditorio Juan Figueroa Salgado de la</p>
            <p>Universidad Nacional Jorge Basadre Grohmann</p> */}
            <p className="main-datails__date">
              Del 07 al 11 de noviembre de 2022 <br /> Tacna - Perú
            </p>
          </div>
          <div className="main-options">
            {/* <a className="button__link button__link--relative button__link--secondary"> */}
            <Scroll
              to="contactanos"
              smooth={false}
              offset={-50}
              duration={600}
              className="button__link button__link--relative "
            >
              Inscripción
            </Scroll>
            <div className='calendar-download__container--streaming '>
              <Scroll
                to="transmision"
                smooth={false}
                offset={-100}
                duration={600}
                className="button__link button__link--relative  streaming-button "
              >
                Ver Streaming
              </Scroll>
            </div>
            {/* <Link
              to={'/code-qr'}
              className="button__link button__link--relative button__link--secondary"
            >
              Generar QR
            </Link> */}
            {/* <a className="button__link button__link--relative button__link--secondary"> */}
            {/* <Link to={'/code-qr'}>Generar QR</Link> */}
            {/* </a> */}
          </div>
          <div className="redes-sociales">
            <a href="https://www.facebook.com/ciistacna" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/c/ciistacna" target="_blank">
              <FaYoutube />
            </a>
          </div>
          <div className="main-message__container">
            <div className="main-message">
              Evento híbrido, todas las ponencias &#40;presenciales y
              virtuales&#41; serán transmitidas por nuestras redes sociales.
            </div>
          </div>
        </div>
        <div className="main-info__container">
          <div className="main-info">

            <div class="spinner">
              <span>E</span>
              <span>L</span>
              <span>&nbsp;</span>
              <span>C</span>
              <span>O</span>
              <span>N</span>
              <span>G</span>
              <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>O</span>
              <span>&nbsp;</span>
              <span>E</span>
              <span>M</span>
              <span>P</span>
              <span>E</span>
              <span>Z</span>
              <span>Ó</span>
              <span>!</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
