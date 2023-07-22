import React from 'react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './SectionPrice.css';
import imgInterbank from '../assets/payment/Interbank_Logo.jpg';
import imgYape from '../assets/payment/Yape.png';


export const SectionPrice = () => {
  const planes = [
    {
      precio: 'Gratis',
      title: 'Estudiantes ESIS',
      checks: [
        'Certificado de 120 horas',
        'Excelentes ponentes',
        'Ponencias Internacionales',
      ],
    },
    {
      precio: 's/20.00',
      title: 'Público en general',
      checks: [
        'Certificado de 120 horas',
        'Excelentes ponentes',
        'Ponencias Internacionales',
      ],
    },
  ];

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <section className="section-price__container " id="price">

    </section>
  );
};
