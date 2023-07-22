import React from "react";
// Fotos Ponentes
import DanielGutierrez from "../assets/speakers/Dr. Daniel Gutierrez - UCSP Perú.jpg";
import MarcoAntonio from "../assets/speakers/MBA. Marco Antonio Sanz - CloudAPPi España.png";
import CarlosMorales from "../assets/speakers/Mgr. Carlos Morales Zapata - PUCP Peru.jpg";
import JennyVega from "../assets/speakers/MSc Jenny Vega - Amazon Reino Unido.jpg";
import JomarSilva from "../assets/speakers/MSc Jomar Silva - NVIDIA LATAM.jpg";
import FranciscoCruz from "../assets/speakers/Ph.D Francisco Cruz - UNSW Australia.jpg";
import ArturoDeza from "../assets/speakers/Ph.D. Arturo Deza - MIT - USA.jpg";
import ClaudioMeneses from "../assets/speakers/Ph.D. Claudio Meneses - UCN Chile.jpg";
import GlenRodriguez from "../assets/speakers/Ph.D. Glen Rodriguez - UNI Perú.jpg";
import JoseCantoral from "../assets/speakers/Ph.D. Jose Cantoral Ceballos - Tec de Monterrey Mexico.jpg";
import JovanRebolledo from "../assets/speakers/Ph.D. Jovan Rebolledo - Naciones Unidas Japon.jpg";
import MariaJosé from "../assets/speakers/Ph.D. Maria-José Escobar - UTSM Chile.jpg";
import MatiasValdenegro from "../assets/speakers/Ph.D. Matias Valdenegro - UG Paises Bajos.jpg";
import RacielYera from "../assets/speakers/Ph.D. Raciel Yera - UJaen España.jpg";
import YamiletSerrano from "../assets/speakers/Ph.D. Yamilet Serrano - UTEC Perú.png";

import wilberRamos from "../assets/speakers/Dr. Wilber Ramos Lovon - UNSA  PERU.jpeg";
import edgarSarmiento from "../assets/speakers/Ph.D. Edgar Sarmiento Calisaya2.jpg";
import robertoEspinoza from "../assets/speakers/Roberto Espinosa Oliva.jpeg";
import "./SectionSpeaker.css";

// Banderas icons
import icon_australia from "../assets/flags-icons-svg/australia-svgrepo-com.svg";
import icon_brazil from "../assets/flags-icons-svg/brazil-svgrepo-com.svg";
import icon_chile from "../assets/flags-icons-svg/chile-svgrepo-com.svg";
import icon_cuba from "../assets/flags-icons-svg/cuba-svgrepo-com.svg";
import icon_japon from "../assets/flags-icons-svg/japan-svgrepo-com.svg";
import icon_mexico from "../assets/flags-icons-svg/mexico-svgrepo-com.svg";
import icon_netherlands from "../assets/flags-icons-svg/netherlands-holland-svgrepo-com.svg";
import icon_peru from "../assets/flags-icons-svg/peru-svgrepo-com.svg";
import icon_spain from "../assets/flags-icons-svg/spain-svgrepo-com.svg";
import icon_uk from "../assets/flags-icons-svg/united-kingdom-svgrepo-com.svg";
import icon_usa from "../assets/flags-icons-svg/united-states-of-america-svgrepo-com.svg";

import { CardSpeaker } from "./CardSpeaker";

export const SectionSpeakers = () => {
  const speakers = [
    {
      nombre: "Ph.D. Arturo Deza",
      promocion: "MIT",
      pais: "USA",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/arturo-deza-9b12324a/",
      foto: ArturoDeza,
      icon: icon_usa,
      icon2: false,
      info: "Ph.D. Arturo Deza. Investigador Postdoctoral Asociado en el Instituto McGovern para la Investigación del Cerebro y el Centro de Cerebros, Mentes y Máquinas trabajando con Tomaso Poggio en el MIT - Estados Unidos, donde actualmente reside. Obtuvo su doctorado en Neurociencia Dinámica en el Laboratorio de Comprensión de la Visión y la Imagen de la Universidad de California Santa Barbara - Estados Unidos. Sus intereses de investigación son comprender los mecanismos humanos de movimiento y procesamiento periférico, así como el problema inverso de cómo los sistemas avanzados de visión por computadora pueden beneficiarse de tales representaciones periféricas.",
    },
    {
      nombre: "Mgr. Carlos Morales",
      promocion: "PUCP",
      pais: "Peru",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/moralescf/",
      foto: CarlosMorales,
      icon: icon_peru,
      icon2: false,
      info: "Mgr. Carlos Morales Zapata. Profesional experimentado en Sistemas de Información con más de 15 años de experiencia como Director de Seguridad de la Información, líder de sistemas de gestión de seguridad de la información, ciberseguridad, sistemas de gestión de continuidad de negocios y sistemas de prevención de fraude en la industria bancaria en corporaciones multinacionales. Obtuvo el grado de Magíster en Informática por la Pontificia Universidad Católica del Perú.",
    },
    {
      nombre: "Ph.D. Claudio Meneses",
      promocion: "UCN",
      pais: "Chile",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/claudio-meneses-74723b13/",
      foto: ClaudioMeneses,
      icon: icon_chile,
      icon2: false,
      info: "Ph.D. Claudio Meneses Villegas Profesor en la Universidad Católica del Norte en Chile, donde actualmente reside. Obtuvo su Doctorado en Ciencia de la Computación por la Universidad de Massachusetts en Estados Unidos. Sus intereses de investigación son Minería de Datos; Machine Learning; Visualización de Datos y Ciencia de Datos",
    },
    {
      nombre: "Ph.D. Daniel Gutierrez",
      promocion: "UCSP",
      pais: "Perú",
      facebook: "https://facebook.com",
      linkedin:
        "https://www.linkedin.com/in/daniel-alexis-gutierrez-pachas-7938b2135/",
      foto: DanielGutierrez,
      icon: icon_peru,
      icon2: false,
      info: "Ph.D. Daniel Alexis Gutiérrez Pachas. Profesor en la Universidad Católica San Pablo en Arequipa, donde actualmente reside. Obtuvo su  Doctorado en Ciencias de la Computación y Matemática Computacional en el Instituto de Ciencias Matemáticas e Informáticas de la Universidad de Sao Paulo en Brasil. Sus intereses de investigación son filtraje y control de sistemas estocásticos, ecuaciones diferenciales parciales, optimización, análisis numérico y minería de datos.",
    },
    {
      nombre: "Ph.D. Edgar Sarmiento Calisaya",
      promocion: "PUC-Rio",
      pais: "Brasil",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/edgar-sarmiento-81a09222/",
      foto: edgarSarmiento,
      icon: icon_brazil,
      icon2: false,
      info: "Ph.D. Edgar Sarmiento Calisaya. Profesor en la Escuela de Ciencia de la Computación en la Universidad Nacional de San Agustín - Arequipa, donde actualmente reside. Obtuvo su Ph.D. en Informática por la Pontificia Universidade Catolica do Rio de Janeiro (PUC-Rio), Brasil. Sus intereses de investigación son la Ingeniería de Software con énfasis en las siguientes lineas de investigación: Ingeniería de Requisitos, Calidad de Software, Arquitectura de Software, DevOps y Sistemas Conscientes de Context",
    },
    {
      nombre: "Ph.D. Francisco Cruz",
      promocion: "UNSW",
      pais: "Australia",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/fcruzau/",
      foto: FranciscoCruz,
      icon: icon_australia,
      icon2: false,
      info: "Ph.D. Francisco Cruz Naranjo. Profesor de Robótica Cognitiva en la Universidad de Nueva Gales del Sur en Australia, donde actualmente reside. Obtuvo su Doctorado en Ciencia de la Computación por la Universidad de Hamburg en  Germany. Sus intereses de investigación son inteligencia artificial explicable, interacción humano-robot, redes neuronales artificiales, aprendizaje por refuerzo, aprendizaje profundo, posibilidades, robótica de desarrollo, aprendizaje interactivo y explicable, y modelos psicológicos y bioinspirados.",
    },
    {
      nombre: "Ph.D. Glen Rodriguez",
      promocion: "UNI",
      pais: "Perú",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/glen-rodriguez-59aba21/",
      foto: GlenRodriguez,
      icon: icon_peru,
      info: "Ph.D. Glen Dario Rodriguez Rafael. Profesor en los programas de Ingeniería de Sistemas y de Ciencias de la Computación de la Universidad Nacional de Ingeniería en Perú, donde actualmente reside.Obtuvo su Ph.D. en Ingeniería de la Información por la Universidad Técnica de Toyohashi en Japón. Sus intereses de investigación son Telecomunicaciones, Computación paralela, Simulación numérica, Redes.",
    },

    {
      nombre: "MSc. Jenny Vega",
      promocion: "Amazon",
      pais: "Reino Unido",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/jennyluciav/",
      foto: JennyVega,
      icon: icon_uk,
      icon2: false,
      info: "MSc. Jenny Lucía Vega Guerrero. Obtuvo su Maestría en Inteligencia Artificial por la Universidad de la Rioja - España. Arquitectura de Soluciones en Amazon Web Services (AWS) en Reino Unido, donde actualmente reside. Sus intereses de investigación son las metodologías de software para machine learning, computación en la nube e inteligencia artificial.",
    },
    {
      nombre: "MSc. Jomar Silva",
      promocion: "NVIDIA LATAM",
      pais: "Brasil",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/homembit/",
      foto: JomarSilva,
      icon: icon_brazil,
      icon2: false,
      info: "Msc. Jomar dos Santos Silva. Gerente de Relaciones con los Desarrolladores para América Latina en NVIDIA. Es ingeniero electrónico por el Centro Universitario de la FEI y posgrado en Gestión de Proyectos y Desarrollo de Sistemas por las Faculdades Associadas de São Paulo, Brasil, donde actualmente reside. Sus intereses de investigación son Internet de las cosas (IoT), Inteligencia artificial, Visión artificial, Computación heterogénea, Código abierto, Alianzas estratégicas y Políticas Públicas",
    },
    {
      nombre: "Ph.D. Jose Cantoral",
      promocion: "Tec de Monterrey",
      pais: "Mexico",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/jacantoral/",
      foto: JoseCantoral,
      icon: icon_mexico,
      icon2: false,
      info: "Ph.D. Jose Cantoral-Ceballos. Profesor Investigador en el Departamento de Ciencia de la Computación del Tecnológico de Monterrey en México, donde actualmente reside. Obtuvo su Doctorado en Ingeniería Eléctrica y Electrónica por la Universidad de Manchester en Reino Unido. Sus intereses de investigación son crear soluciones de Deep Learning a diferentes problemas, en particular al estudio de señales neurológicas.",
    },
    {
      nombre: "Ph.D. Jovan Rebolledo",
      promocion: "Exponential Japan",
      pais: "Japon",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/jovandavid/",
      foto: JovanRebolledo,
      icon: icon_japon,
      icon2: false,
      info: "Ph.D. Jovan David Rebolledo Mendez. Director de Exponential Japan cuya visión es ayudar a posicionar a Japón como un líder en el aprovechamiento de tecnologías exponenciales para el mundo, con sede en Japón donde actualmente reside. Obtuvo su Doctorado en Ciencia de la Computación e Ingeniería por la Universidad de Kamazawa en Japón. Sus intereses de investigación son Machine Learning e Inteligencia Artificial, startups, y el desarrollo de soluciones basadas en tecnologías exponenciales.",
    },

    {
      nombre: "MBA. Marco Sanz",
      promocion: "CloudAPPi",
      pais: "España",
      facebook: "https://facebook.com",
      linkedin:
        "https://www.linkedin.com/in/marco-antonio-sanz-molina-prados-09733518/",
      foto: MarcoAntonio,
      icon: icon_spain,
      icon2: false,
      info: "MBA. Marco Antonio Sanz Molina Prados. Director Ejecutivo General y Director de Tecnología orientado a la innovación que mezcla capacidades técnicas con funcionalidades y gestión en el grupo empresarial CloudAPPi, un grupo empresarial centrado en la transformación digital que está presente en España y Latinoamérica desde hace más de 7 años, con sede central en España, donde actualmente reside. Obtuvo su Maestría en la Universidad Carlos III de Madrid en España.",
    },
    {
      nombre: "Ph.D. Maria Escobar",
      promocion: "UTSM",
      pais: "Chile",
      facebook: "https://facebook.com",
      linkedin:
        "https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-escobar-9b0b43206/",
      foto: MariaJosé,
      icon: icon_chile,
      icon2: false,
      info: "Ph.D. María José Escobar. Investigadora asociada del AC3E e investigadora colaboradora del Centro Nacional de Inteligencia Artificial (CENIA). Académica del Departamento de Electrónica de la Universidad Técnica Federico Santa María en Valparaíso, Chile, donde actualmente reside. Obtuvo su PhD en Procesamiento de Señales e Imágenes por la Université Côte dAzur - Francia. Sus intereses de investigación tienen relación con la neurociencia computacional, inteligencia artificial y robótica cognitiva.",
    },

    {
      nombre: "Ph.D. Matias Valdenegro",
      promocion: "UG",
      pais: "Paises Bajos",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/matias-valdenegro-toro-29383717/",
      foto: MatiasValdenegro,
      icon: icon_netherlands,
      icon2: false,
      info: "Ph.D. Matías Valdenegro Toro. Profesor asistente de Machine Learning en el Instituto Bernoulli de la Facultad de Ciencias e Ingeniería de la Universidad de Groningen - Países Bajos, donde actualmente reside. Obtuvo su Doctorado en Ingeniería Eléctrica (Ph.D.) por la Universidad Heriot-Watt - Escocia en 2019. Sus intereses de investigación son hacer que los robots sean capaces de “ver” y percibir tal como lo hacen los humanos. Sus intereses de investigación son las redes neuronales profundas, el aprendizaje por refuerzo, la cuantificación de la incertidumbre, la visión robótica y la robótica submarina.",
    },

    {
      nombre: "Ph.D. Raciel Yera",
      promocion: "UJaen",
      pais: "España | UNICA - Cuba",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/robertoespinosaoliva/",
      foto: RacielYera,
      icon: icon_spain,
      icon2: icon_cuba,
      info: "Ph.D. Raciel Yera Toledo. Es investigador colaborador desde hace más de 8 años del grupo de investigación Sistemas Inteligentes Basados en Análisis de Decisión Difusos en la Universidad de Jaén en España, donde actualmente reside. Obtuvo su Doctorado en Ciencias Técnicas (Ciencias de la Computación) por la Universidad Central de Las Villas, Cuba. Sus intereses de investigación son los sistemas de recomendación, actualmente un campo de investigación principal en tecnologías de la información.",
    },
    {
      nombre: "Ph.D. Roberto Espinosa Oliva",
      promocion: "UTA",
      pais: "Chile",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/robertoespinosaoliva/",
      foto: robertoEspinoza,
      icon: icon_chile,
      icon2: false,
      info: "Ph.D. Roberto Espinosa Oliva. Profesor en el Departamento de Ingeniería en Computación e Informática de la Universidad de Tarapacá en Chile, donde actualmente reside. Obtuvo su Doctorado en Ciencias de la Computación por la Universidad de Alicante, España. Sus intereses de investigación son Ingeniería de datos para la generación de conocimiento e Ingeniería de Requisitos.",
    },
    {
      nombre: "Dr. Wilber Ramos Lovon",
      promocion: "UNSA",
      pais: "Perú",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/wilber-ramos-83b37249/",
      foto: wilberRamos,
      icon: icon_peru,
      icon2: false,
      info: "Dr. Wiber Roberto Ramos Lovon.Director de la Escuela de Ciencia de la Computación de la Universidad Nacional de San Agustín - Arequipa, donde actualmente reside. Obtuvo su Doctorado en Ciencias de la Computacion en la Universidad Nacional de San Agustín - Arequipa. Sus intereses de investigación son Semánticas, Aplicaciones y Matemáticas Discretas. Pionero y Promotor de la Ciencia de la Computación en Arequipa.",
    },
    {
      nombre: "Ph.D. Yamilet Serrano",
      promocion: "UTEC",
      pais: "Perú",
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/yamilet-serrano-llerena-71891591/",
      foto: YamiletSerrano,
      icon: icon_peru,
      icon2: false,
      info: "Ph.D. Yamilet Serrano Llerena. Directora de Ciencia de Datos y Profesora Investigadora Asistente en la Universidad de Ingeniería y Tecnología UTEC en Perú, donde actualmente reside. Obtuvo su Ph.D. en Ciencia de la Computación por la Universidad Nacional de Singapur. Sus intereses de investigación son exploración y minería de datos utilizando técnicas de Inteligencia Artificial",
    },
  ];

  return (
    <div className="section-speackers__container " id="ponentes">
      <div className="section-speakers section-xl ">
        <h1 className="speakers_title">Ponentes</h1>
        <div className="speakers_grid_container_main">
          {speakers.map(
            (
              {
                nombre,
                promocion,
                pais,
                linkedin,
                foto,
                facebook,
                icon,
                info,
                icon2,
              },
              i
            ) => (
              <CardSpeaker
                key={i}
                nombre={nombre}
                promocion={promocion}
                pais={pais}
                linkedin={linkedin}
                foto={foto}
                facebook={facebook}
                icon={icon}
                i={i}
                info={info}
                icon2={icon2}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
