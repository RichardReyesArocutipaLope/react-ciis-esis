import React, { useEffect } from 'react';

import caranegra from '../assets/sponsors/caranegra.png';
import ceid from '../assets/sponsors/ceid.png';
import egatur from '../assets/sponsors/egatur.png';
import eroz from '../assets/sponsors/eroz_filmakers_v3.png';
import esis from '../assets/sponsors/esis.png';
import itel from '../assets/sponsors/itel.png';
import lacume from '../assets/sponsors/lacume.png';
import dubai from '../assets/sponsors/logo-dubai.png';
import sfact from '../assets/sponsors/sfact_logo.png';
import unjbg from '../assets/sponsors/unjbg.png';

import antrix from '../assets/sponsors/antrix.png';
import asus from '../assets/sponsors/asus.png';
import instrumentosFredy from '../assets/sponsors/instrumentosFredy.png';
import openinfo from '../assets/sponsors/openinfo.png';
import elPollon from '../assets/sponsors/el_pollon.png'

import rogstrix from '../assets/sponsors/rogstrix.png'
import tuf from '../assets/sponsors/tuf.png'

import lacume2 from '../assets/sponsors/lacume2.png'
import lacume3 from '../assets/sponsors/lacume3.png'

import antrix2 from '../assets/sponsors/antrix2.png'
import antrix3 from '../assets/sponsors/antrix3.png'

import open2 from '../assets/sponsors/open2.png'
import open3 from '../assets/sponsors/open3.png'




import AOS from "aos";
import "aos/dist/aos.css";

import './SectionSponsors.css';

export const SectionSponsors = () => {
  const data = [
    {
      alt: 'itel',
      link: 'http://itel.unjbg.edu.pe',
      image: itel,
    },
    {
      alt: 'caranegra',
      link: 'https://www.facebook.com/caranegratacna/',
      image: caranegra,
    },
    {
      alt: 'ceid',
      image: ceid,
      link: 'http://ceid.unjbg.edu.pe',
    },
    {
      alt: 'egatur',
      link: 'https://egatur.edu.pe/',
      image: egatur,
    },
    {
      alt: 'eroz',
      link: 'https://www.facebook.com/profile.php?id=100076456204402',
      image: eroz,
    },
    {
      alt: 'lacumen',
      link: 'https://grupolacume.com.pe/',
      image: lacume,
    },
    {
      alt: 'dubai-hotel',
      link: 'https://www.facebook.com/HotelDubaiT',
      image: dubai,
    },
    {
      alt: 'unjbg',
      link: 'https://www.facebook.com/UNJBG.ocim',
      image: unjbg,
    },
    {
      alt: 'esis',
      link: 'https://www.facebook.com/profile.php?id=100064734548747',
      image: esis,
    },
    {
      alt: 'asus',
      link: '',
      image: asus,
    },
    {
      alt: 'antrix',
      link: '',
      image: antrix,
    },
    {
      alt: 'instrumentos-fredy',
      link: 'https://www.facebook.com/elpiromano',
      image: instrumentosFredy,
    },
    {
      alt: 'openinfo',
      link: 'https://www.instagram.com/grupo_openinfo/',
      image: openinfo,
    },
    {
      alt: 'sfact',
      link: 'https://sfact.pe',
      image: sfact,
    },
    {
      alt: 'el_pollon',
      link: 'https://hablemosdepollo.com/',
      image: elPollon,
    },
  ];

  const feria = [
    {
      dia: 'Martes 08/11/22',
      efe: false,
      company: [
        {
          name: 'Grupo lacume',
          titulo: 'Tecnologías y novedades en Grupo Lacume',
          expositor: 'Jonathan Aragón Ballesteros',
          horario: '18:00 - 18:30',
          premios: 'Buffer',
          logos: [
            {
              img: lacume,
              id: 1,
            },
            {
              img: lacume2,
              id: 2,
            },
            {
              img: lacume3,
              id: 3,
            },
          ],
        },
        {
          name: 'Antryx',
          titulo: 'Tecnología en el mercado peruano de accesorios gaming.',
          expositor: 'Dariet Raúl Ríos',
          horario: '18:30 - 19:00',
          premios: 'Mouse Antryx M730 + merchandising.',
          logos: [
            {
              img: antrix,
              id: 1,
            },
            {
              img: antrix2,
              id: 2,
            },
            {
              img: antrix3,
              id: 3,
            },
          ],
        },
      ],
    },
    {
      dia: 'Jueves 10/11/22',
      efe: true,
      company: [
        {
          name: 'ASUS PERÚ',
          titulo: 'Placas Madres de Computadoras (Evolución)',
          expositor: 'Oliver Aco Alvarez',
          horario: '18:00 - 18:30',
          premios: 'Sorpresa',
          logos: [
            {
              img: asus,
              id: 1,
            },
            {
              img: rogstrix,
              id: 2,
            },
            {
              img: tuf,
              id: 3,
            },
          ],
        },
        {
          name: 'OpenInfo',
          titulo: 'TICs con RaspDuino',
          expositor: 'Jesus Jarol Cervantes Tapia',
          horario: '18:30 - 19:00',
          premios: '(1) Beca con 50% de descuento (5) LLaveros con temática de lenguajes de programación',
          logos: [
            {
              img: openinfo,
              id: 1,
            },
            {
              img: open2,
              id: 2,
            },
            {
              img: open3,
              id: 3,
            },
          ],
        },
      ],
    },
  ]

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section-auspiciadores" id="auspiciadores">

      <div className='technology-fair section-l'>
        <h2 className='technology-fair__title'>Feria tecnólogica</h2>
        {
          feria.map((item) => (
            <>

              <button className='technology-fair__day-title'>
                <span>{item.dia}</span>
                <div class="top"></div>
                <div class="left"></div>
                <div class="bottom"></div>
                <div class="right"></div>
              </button>
              {item.company.map((element) => (
                <div className={`technology-fair__day ${item.efe == true ? 'efe' : ''}`}>
                  <div className='technology-fair__day-wrapper1'>
                    <div class="technology-fair__day-container">
                      <span></span>
                      <div class="technology-fair__day-info">
                        <img className='day-info__img' src={element.logos[0].img} alt="" />
                        <p className='day-info__company'>{element.name}</p>
                        <h4 className='day-info__title'>{element.titulo}</h4>
                        <p className='day-info__ponente'><b className='Expositor'>Expositor:</b>{element.expositor}</p>
                        <p className='day-info__ponente'><b className='Expositor'>Premios:</b>{element.premios}</p>
                        <p className='day-info__date'>{element.horario}</p>
                        <div className='technology-fair__day-gifts'></div>
                      </div>
                    </div>
                  </div>
                  <div className='technology-fair__day-wrapper2'>
                    <div>
                      {element.logos.map((img) => (
                        <a class={`hexagono hexagono-${img.id}`} >
                          <span class="hexagono-content">
                            <div className="aea">

                              <img src={img.img} alt="" className='hexagono-img' />
                            </div>
                          </span>
                        </a>

                      ))}
                    </div>
                  </div>
                </div>
              ))}

            </>
          ))
        }

      </div>

      {/* ======================================================= */}
      <div className="sponsors_content_title">
        <h2 className="sponsors_title">Nuestros Auspiciadores</h2>
        <p className=""></p>
      </div>
      <div className="auspiciadores_container_images">
        <div className="auspiciadores section-l">
          {data.map(({ alt, image, link }, i) => {
            return (
              <a
                key={i}
                className={`auspiciadores__link ${alt}`}
                href={link}
                target="_blank"
              >
                <img src={image} alt={alt} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
