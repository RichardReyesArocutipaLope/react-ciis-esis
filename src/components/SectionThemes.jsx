import React from 'react';
import './SectionThemes.css';
import {
  FaBusinessTime,
  FaShieldVirus,
  FaBroadcastTower,
  FaRobot,
  FaCloud,
  FaSignal,
  FaPlaystation,
  FaCode,
  FaDatabase,
  FaVrCardboard,
  FaAtom,
} from 'react-icons/fa';
export const SectionThemes = () => {
  const themesArray = [
    {
      title: 'Robótica',
      description:
        'La robótica es la rama de la ingeniería mecánica, de la ingeniería electrónica y de las ciencias de la computación, que se ocupa del diseño, construcción, operación, estructura, manufactura y aplicación de los robots.',
      icon: <FaRobot />,
      color: 'celeste',
    },
    {
      title: 'Sistemas Inteligentes y Vision Computacional',
      description:
        'La visión computacional es un asunto relativamente nuevo y totalmente conectado con el aprendizaje de las máquinas (machine learning). Es el área de la ciencia que desarrolla teorías y métodos hacia la extracción automática de información útil contenida en imágenes.',
      icon: <FaShieldVirus />,
      color: 'azul',
    },
    {
      title: 'Computación en la nube',
      description:
        'La computación en la nube (del inglés cloud computing)​ conocida también como servicios en la nube, informática en la nube, nube de cómputo o simplemente "la nube", es el uso de una red de servidores remotos conectados a internet para almacenar, administrar y procesar datos, servidores, bases de datos, redes y software.',
      icon: <FaCloud />,
      color: 'verde',
    },
    {
      title: 'Industria 4.0',
      description:
        'La Industria 4.0 es la cuarta etapa industrial más importante que se ha verificado desde el inicio de la revolución industrial en el siglo XVIII .Se caracteriza por una fusión de tecnologías actualmente en prueba o en desarrollo, lo que está desintegrando las fronteras entre las esferas física, digital, y biológica.',
      icon: <FaBusinessTime />,
      color: 'morado',
    },
    {
      title: 'Desarrollo de Software',
      description:
        'Conjunto de actividades informáticas dedicadas al proceso de creación, diseño, despliegue y compatibilidad de software. El software en sí es el conjunto de instrucciones o programas que le dicen a una computadora qué hacer.',
      icon: <FaCode />,
      color: 'rojo',
    },
    {
      title: 'Minería de Datos',
      description:
        'La minería de datos o exploración de datos (es la etapa de análisis de "knowledge discovery in databases" o KDD) es un campo de la estadística y las ciencias de la computación referido al proceso que intenta descubrir patrones en grandes volúmenes de conjuntos de datos.',
      icon: <FaDatabase />,
      color: 'amarillo',
    },
    {
      title: 'Ciencia de datos',
      description:
        'La ciencia de datos es un campo interdisciplinario que involucra métodos científicos, procesos y sistemas para extraer conocimiento o un mejor entendimiento de datos en sus diferentes formas, ya sea estructurados o no estructurados.',
      icon:<FaAtom/>,
      color: 'cafe',
    },
    {
      title: 'Ingeniería de Software',
      description:
        'La Ingeniería de Software es una de las ramas de las ciencias de la computación que estudia la creación de software confiable y de calidad, basándose en métodos y técnicas de ingeniería, y brindando soporte operacional y de mantenimiento.',
      icon: <FaCode />,
      color: 'naranja',
    },
    //rosado cafe
  ];
  return (
    <section className="section-themes__container">
      <div className="section-themes__overlay"></div>
      <div className="section-themes__title">
        <h2>Ejes temáticos</h2>
        {/* <p className="section-themes__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quos
          dolore, sunt doloremque, maxime voluptas reprehenderit Aliquid quos
          dolore, sunt doloremque, maxime voluptas.
        </p> */}
        <br />
      </div>
      <div className="section-themes section-xl">
        {themesArray.map((item, i) => (
          <div key={i} className={`theme ${item.color}`}>
            <span className={`theme__style theme__icon ${item.color}-color`}>
              {item.icon}
            </span>
            <h2 className="theme__style theme__title">{item.title}</h2>
            <p className="theme__style theme__description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
