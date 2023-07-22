import { useState } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import ponente from '../assets/ponente/ponente.jpg';
import './SectionCalendar.css';

// Ponentes

import { SiGooglecalendar } from 'react-icons/si';
import DanielGutierrez from '../assets/speakers/Dr. Daniel Gutierrez - UCSP Perú.jpg';
import wilberRamos from '../assets/speakers/Dr. Wilber Ramos Lovon - UNSA  PERU.jpeg';
import MarcoAntonio from '../assets/speakers/MBA. Marco Antonio Sanz - CloudAPPi España.png';
import CarlosMorales from '../assets/speakers/Mgr. Carlos Morales Zapata - PUCP Peru.jpg';
import JennyVega from '../assets/speakers/MSc Jenny Vega - Amazon Reino Unido.jpg';
import JomarSilva from '../assets/speakers/MSc Jomar Silva - NVIDIA LATAM.jpg';
import FranciscoCruz from '../assets/speakers/Ph.D Francisco Cruz - UNSW Australia.jpg';
import ArturoDeza from '../assets/speakers/Ph.D. Arturo Deza - MIT - USA.jpg';
import ClaudioMeneses from '../assets/speakers/Ph.D. Claudio Meneses - UCN Chile.jpg';
import edgarSarmiento from '../assets/speakers/Ph.D. Edgar Sarmiento Calisaya2.jpg';
import GlenRodriguez from '../assets/speakers/Ph.D. Glen Rodriguez - UNI Perú.jpg';
import JoseCantoral from '../assets/speakers/Ph.D. Jose Cantoral Ceballos - Tec de Monterrey Mexico.jpg';
import JovanRebolledo from '../assets/speakers/Ph.D. Jovan Rebolledo - Naciones Unidas Japon.jpg';
import MariaJosé from '../assets/speakers/Ph.D. Maria-José Escobar - UTSM Chile.jpg';
import MatiasValdenegro from '../assets/speakers/Ph.D. Matias Valdenegro - UG Paises Bajos.jpg';
import RacielYera from '../assets/speakers/Ph.D. Raciel Yera - UJaen España.jpg';
import YamiletSerrano from '../assets/speakers/Ph.D. Yamilet Serrano - UTEC Perú.png';
import robertoEspinoza from '../assets/speakers/Roberto Espinosa Oliva.jpeg';
import { Ponencias } from './Ponencias';
import { Talleres } from './Talleres';


import horarioponentesCIIS from '../assets/download/horario-ponentes-CIIS.png';


export const SectionCalendar = () => {
  const days = [
    {
      day: 'Día 1',
      date: '07-11-2022',
      id: 1,
    },
    {
      day: 'Día 2',
      date: '08-11-2022',
      id: 2,
    },
    {
      day: 'Día 3',
      date: '09-11-2022',
      id: 3,
    },
    {
      day: 'Día 4',
      date: '10-11-2022',
      id: 4,
    },
    {
      day: 'Día 5',
      date: '11-11-2022',
      id: 5,
    },
  ];
  const ViewDays = [
    {
      day: 'Día 1',
      date: '07-11-2022',
      ponencias: [
        {
          date: '16:00 - 17:00',
          title: 'Ph.D. Edgar Sarmiento Calisaya - UNSA - Perú',
          description: 'Ingeniería de Software Automatizada.',
          photo: edgarSarmiento,
          presencial: true,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGhjdml2bHF1dmE4ODJsbDI4czF2YmNndWggY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '17:00 - 18:00',
          title: 'Inauguración',
          description: '',
          photo: ponente,
          presencial: true,
          calendar: '',
        },
        {
          date: '18:00 - 19:00',
          title: 'Ph.D. Claudio Meneses - UCN - Chile',
          description:
            'Minería de Opiniones y Análisis de Sentimientos en Redes Sociales. Un Caso de Estudio del COVID-19 en Chile.',
          photo: ClaudioMeneses,
          presencial: true,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmhwdmtrczltYW0wdmE0a2k2dXRjbjVjaXYgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
      ],
      talleres: [],
      id: 1,
    },
    {
      day: 'Día 2',
      date: '08-11-2022',
      ponencias: [
        {
          date: '9:00 - 10:00',
          title: 'Ph.D. Raciel Yera - UJAEN - España',
          description:
            'Aplicaciones novedosas de los sistemas de recomendación en e-health y e-learning.',
          photo: RacielYera,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTRqYWJma3Rxb3Zvam9vamlzajg1YzZuMWIgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '10:00 - 11:00',
          title: 'Ph.D. Matias Valdenegro - UGroningen - Países Bajos',
          description:
            ' Escribiendo Papers (de Visión Computacional) desde la Pespectiva del Revisor.',
          photo: MatiasValdenegro,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGNyNWc1MXFuNDltN2licWFyMWRsbTR0cm0gY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '16:00 - 17:00',
          title: 'Mgr. Carlos Morales - PUCP - Perú',
          description:
            'Convergencia de las Tecnologías de Información (IT) y Operación (OT) en la Industria 4.0.',
          photo: CarlosMorales,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzU1NGI0ZDZmaGd1cnU5MXZubmZ1aWhqanMgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '17:00 - 18:00',
          title: 'Ph.D. Arturo Deza - MIT - USA',
          description:
            'Sistemas de Percepción Híbridos y aplicaciones de sus tecnologías en el Perú.',
          photo: ArturoDeza,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGx0dTlqYWc2aTdkamFxY2lnaGVrbnFlZTEgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
      ],
      talleres: [],
      id: 2,
    },
    {
      day: 'Día 3',
      date: '09-11-2022',
      ponencias: [
        {
          date: '09:00 - 10:00',
          title: 'Ph.D. María Escobar - UTFSM - Chile',
          description:
            'Algoritmos Bio-Inspirados para el Procesamiento de Imágenes e Inteligencia Artificial.',
          photo: MariaJosé,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N2JzM25jZ204MG43MHAzcDQxdGY5amk0ZTYgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '10:00 - 11:00',
          title: 'MSc. Jomar Silva - NVIDIA - Brasil',
          description: 'Cómo acelerar la IA en la GPU sin complicaciones.',
          photo: JomarSilva,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mjg3amtjdGxwYmVocnIxZTY2dm9rbTMwcmogY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '16:00 - 17:00',
          title: 'MSc. Jenny Vega - Amazon - Reino Unido',
          description: 'Amazon Web Services para Data Science.',
          photo: JennyVega,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N2ZtcTFhYjBxdDB2ZHNmazEwOGtlNjdzNWYgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '17:00 - 18:00',
          title: 'Ph.D. Jose Cantoral - Tec de Monterrey - México',
          description: 'Aplicaciones de Deep Learning para Señales Cerebrales.',
          photo: JoseCantoral,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Nzg4amh0Y2RyNWNjdG5mZG12ZWRzN3E4OW4gY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
      ],
      talleres: [],
      id: 3,
    },
    {
      day: 'Día 4',
      date: '10-11-2022',
      ponencias: [
        {
          date: '09:00 - 10:00',
          title: 'Ph.D. Jovan Rebolledo - Exponential Japan - Japón',
          description: 'Los Robots en Japón y su Posible Impacto en el Mundo.',
          photo: JovanRebolledo,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWs3ZHF0NHZpZWdnMmZ0dm92bDNqYXA4OW0gY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '10:00 - 11:00',
          title: 'MBA. Marco Sanz -CloudAPPi - España',
          description:
            '¿Cómo proteger tus APIs ante el aumento de ciberataques?.',
          photo: MarcoAntonio,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGg1ZDRuODViNm8xc2s3NjlhcXNqNzZvOHEgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '16:00 - 17:00',
          title: 'Ph.D. Daniel Gutiérrez - UCSP - Perú',
          description:
            'Prediciendo la Deserción Universitaria empleando técnicas del análisis de supervivencia.',
          photo: DanielGutierrez,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N24wYzRxZWQydjIwYzRiOTNkbnJvbGVoajQgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '17:00 - 18:00',
          title: 'Ph.D. Francisco Cruz - UNSW - Australia',
          description:
            'Sistemas Robóticos Explicables en Escenarios de Aprendizaje por Refuerzo.',
          photo: FranciscoCruz,
          presencial: false,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGdjcXRldjk1ZHQyazNkOTRlbnRodmcxdWkgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
      ],
      talleres: [],
      id: 4,
    },
    {
      day: 'Día 5',
      date: '11-11-2022',
      ponencias: [
        {
          date: '09:00 - 10:00',
          title: 'Dr. Wiber Roberto Ramos Lovon UNSA - Perú',
          description:
            'Proyecto KUSISQA: Ayudando a Regular Nuestras Emociones con Computación Afectiva e Inteligencia Artificial.',
          photo: wilberRamos,
          presencial: true,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzM1bDBrOXAxNmoydXUzczk1b3EwYXBuMHEgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '10:00 - 11:00',
          title: 'Ph.D. Yamilet Serrano UTEC - Perú',
          description: 'La revolución de los datos y su impacto',
          photo: YamiletSerrano,
          presencial: true,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N2VkYnNlMDdlOG5tdDYydWJrZ3ZpMDgxb2ggY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '16:00 - 17:00',
          title: 'Ph.D. Glen Dario Rodriguez Rafael - UNI - Perú ',
          description:
            'Un enfoque para pruebas de regresión de software en desarrollo incremental usando clusterización de los patrones de acceso a datos.',
          photo: GlenRodriguez,
          presencial: true,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDNwOWkxc2o2dnBtdTF2ZzdpbHFpb3VmcHIgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '17:00 - 18:00',
          title: 'Ph.D. Roberto Espinoza Oliva UTA - Chile',
          description:
            'Hacia la Democratización del Análisis de Datos: Retos y Propuestas asociadas.',
          photo: robertoEspinoza,
          presencial: true,
          calendar:
            'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmJrcWdqNDQ2Yzk2aGo1ZzNnM2JjNDA4aWUgY18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGc&tmsrc=c_0e3d4263e7bf73fa956f63428147881abc1fc073cc1b038fb95403d9cb654bd2%40group.calendar.google.com',
        },
        {
          date: '18:00 - 19:00',
          title: 'Clausura',
          description:
            'Daremos pase a la ceremonia de cierre que estará a cargo de una autoridad de la Universidad Nacional Jorge Basadre Grohmann, quien nos brindara unas palabras, concluyendo asi, el Congreso Internacional de Informatica y Sistemas.',
          photo: ponente,
          presencial: true,
          calendar: '',
        },
      ],
      talleres: [],
      id: 5,
    },
  ];
  const [viewDay, setViewDay] = useState(1);

  const onclickDay = (id) => {
    setViewDay(id);
  };

  return (
    <section className="section-calendar__container " id="horario">
      <div className="section-calendar__overlay"></div>
      <div className="section-calendar">
        <h2 className="section-calendar__title">Horario del evento</h2>
        <div className="calendar__icons-container">
          <a
            className="calendar__icons"
            href="https://calendar.google.com/calendar/u/8?cid=Y18wZTNkNDI2M2U3YmY3M2ZhOTU2ZjYzNDI4MTQ3ODgxYWJjMWZjMDczY2MxYjAzOGZiOTU0MDNkOWNiNjU0YmQyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
            target="_blank"
          >
            <SiGooglecalendar />
          </a>
          <a
            className="calendar__icons"
            href="https://www.facebook.com/ciistacna"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="calendar__icons"
            href="https://www.youtube.com/c/ciistacna"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="line__container">
          <span className="line"></span>
        </div>
        <div>
          <nav className="calendar-nav">
            <ul className="calendar-nav__list">
              {days.map((item, i) => (
                <li key={i} className="calendar-nav__item">
                  <a
                    className={`calendar-nav__link ${viewDay === item.id ? 'calendar-nav__link--active' : ''
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

        <div className="calendar-day__container">
          {ViewDays.map((item, i) => {
            if (viewDay === item.id) {
              console.log(item.talleres.length);
              if (item.talleres.length > 0) {
                return (
                  <div
                    key={i}
                    className="calendar-day__grid--singap section-xl"
                  >
                    <div className="calendar-day__ponencias">
                      <h2 className="calendar-day__group-tittle">Ponencias</h2>
                      <div className={`calendar-day__day`}>
                        {item.ponencias.map((element, i) => (
                          <Ponencias key={i} element={element} />
                        ))}
                      </div>
                    </div>
                    <div className="calendar-day__talleres">
                      <h2 className="calendar-day__group-tittle">Talleres</h2>
                      <Talleres item={item} />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="calendar-day__flex section-xl">
                    {item.ponencias.map((element, i) => (
                      <Ponencias element={element} key={i} />
                    ))}
                  </div>
                );
              }
            }
          })}
        </div>

        <div className='calendar-download__container'>
          <a
            href={horarioponentesCIIS}
            className="calendar-download"
            download
          >
            Descargar Horario
          </a>
        </div>


        <div className="multimedia multimedia--streaming" id='transmision'>
          <div className="multimedia__sombra multimedia__sombra--streaming"></div>
          <div className="multimedia__sombra multimedia__sombra--streaming"></div>
          <div className="multimedia__media multimedia__media--streaming">
            <iframe src="https://www.youtube.com/embed/5UYTGX5ICBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
