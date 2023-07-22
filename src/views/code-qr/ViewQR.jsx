import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import appApi from '../../api/appApi';
import ImagenLogo from '../../assets/logo.png';
import { useForm } from '../../hooks/useForm';
import './style.css';

// API de google
// https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=

const QrContainer = ({ render, token }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px dashed #aaa',
      }}
    >
      {render ? (
        <QRCode
          value={token}
          size={500}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
          }}
          fgColor="#282c34"
          bgColor="#fff"
          level="H"
          viewBox={`0 0 500 500`}
        />
      ) : (
        <img
          src={ImagenLogo}
          alt=""
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
          }}
        />
      )}
    </div>
  );
};

export const ViewQR = () => {
  const [values, handleInputChange] = useForm({ email: '' });
  const [toggle, SetToggle] = useState({
    banderita: false,
    id: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Se envido el submit');
    try {
      const resp = await appApi.post('/auth/asistente-email', {
        email: values.email,
      });
      console.log(resp);
      if (resp.status == 201) {
        SetToggle({ banderita: true, id: resp.data.id });
      }
    } catch (error) {
      console.log(error);
      SetToggle({ banderita: false });
      const { message, statusCode } = error.response.data;
      if (statusCode == 404) {
        Swal.fire({
          icon: 'warning',
          title: 'Warning!',
          text: message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio mal!',
        });
      }
    }
  };

  return (
    <div className="view_qr_container_main">
      <div className="view_qr_container">
        <div className="view_qr_container_grid">
          <form
            onSubmit={handleSubmit}
            autoComplete="ÑÖcompletes"
            className="view_qr_form"
          >
            <p>Generador de Codigo QR</p>
            <input
              type="text"
              placeholder="*correo electrónico"
              name="email"
              classname="view_qr_input"
              value={values.email}
              onchange={handleinputchange}
              required
              autocomplete="ñöcompletes"
            />
            <input
              type="text"
              placeholder="*codigo-universitario"
              name="code-universitario "
              classname="view_qr_input"
              value={values.emaih}
              onchange={handleinputchange}
              required
              autocomplete="ñöcompletes"
            />
            <input
              type="submit"
              value="Generar"
              className="view_qr_input_submit"
            />
          </form>
          <QrContainer render={toggle.banderita} token={toggle.id} />
        </div>
      </div>
    </div>
  );
};
