import React from 'react'
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';



export const CardSpeaker = ({ nombre, promocion, pais, linkedin, foto, facebook, icon, i, info, icon2 }) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <div key={i} className="speaker_card_container">
      <div className="speaker_card_container_image">
        <div className='speaker-card__image-container'>
          <img src={foto} alt="" className="speaker_card_image" />
          <div className='more-info'>
          </div>
          <button className='more-info__button' onClick={toggle}>Leer más</button>
        </div>
        <img src={icon} alt="" className="icon_flag" />
        {icon2&&<img src={icon2} alt="" className="icon_flag2" />}
      </div>
      <div className="speaker_card_info">
        <h2 className="speaker_card_name">{nombre}</h2>
        <h3 className="speaker_card_especialidad">
          {promocion} - {pais}
        </h3>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div className='cmodal-header'>
            <div className='cmodal-header__img-container'>
              <img className='cmodal-header__img' src={foto} alt="foto ponente" />
            </div>
            <div className='cmodal-header__info'>
              <h2 className="cmodal-header__info-name">{nombre}</h2>
              <h3 className="cmodal-header__info-especialidad">
                {promocion} - {pais}
              </h3>
              <div className='cmodal-header__rrss'>
              <a
                href={linkedin}
                target="_blank"
                className="cmodal-header__rrss-icon"
              >
                <FaLinkedin />
              </a>
            </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className='cmodal-body__description'>
            {info}
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}
