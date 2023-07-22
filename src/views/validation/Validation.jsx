import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import './Validation.css';

export const Validation = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const qToken = query.get('token');

  useEffect(() => {
    if (!qToken) {
      navigate('/');
    }
  }, [qToken]);

  // Estado para el Formulario
  const [values, onChangeInput, reset] = useForm({
    codigoUniv: '',
    passwordUno: '',
    passwordDos: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { codigoUniv, passwordUno, passwordDos } = values;
    if (passwordUno === '' || passwordUno.length < 8) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'La contraseña no puede estar vacia o con menos de 8 caracteres',
      });
    } else if (passwordDos === '' || passwordUno !== passwordDos) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
      });
    } else {
      const obj =
        codigoUniv === ''
          ? { password: values.passwordUno }
          : { password: values.passwordDos, codigoUniv: values.codigoUniv };
      try {
        const resp = await axios.post(
          'https://ciistacna.com/api/auth/confirmation',
          obj,
          { headers: { Authorization: `Bearer ${qToken}` } },
        );
        console.log(resp);
        // const body = resp.json();
        if (resp.status === 201) {
          // navigate('/pagos');
          Swal.fire({
            icon: 'success',
            title: 'Usuario registrado!.',
            text: 'Porfavor no le des tus credenciales a otra persona',
          });
        } else if (resp.status != 500) {
          Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text: resp.data.message,
          });
        }
      } catch (error) {
        const { message, statusCode } = error.response.data;
        if (statusCode != 500) {
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
    }
  };

  return (
    <>
      <div className="validation_container_main">
        <div className="validation_container_flex">
          <div className="validation__title">
            <h1>
              <div className="validation__xxiii">
                <span>&lt;2022/&gt;</span>
              </div>
              <div className="validation__congreso">
                <span>CIIS - XXIII</span>
              </div>
            </h1>
            <span className="validation__lined"></span>
          </div>
          <div className="validation__form">
            <h2>Formulario de inscripción</h2>
            <form
              id="form"
              action="#"
              onSubmit={handleSubmit}
              autoComplete="ÑÖcompletes"
            >
              <span>
                <p className="validation__p">
                  Si usted es estudiante de la Universidad Nacional Jorge
                  Basadre Grohmann, introduzca su código universitario, en su
                  defecto deje este campo vacío.
                </p>
              </span>
              <span>
                <input
                  type="text"
                  id="code"
                  className="validation__input"
                  name="codigoUniv"
                  value={values.codigoUniv}
                  onChange={onChangeInput}
                  placeholder="Código universitario"
                  autoComplete="off"
                />
              </span>
              <span>
                <p className="validation__p">
                  Introduzca una contraseña válida, esta servirá posteriormente
                  para marcar la asistencia de cada ponencia y recibir su
                  certificado de superar el 80% de asistencias.
                </p>
              </span>
              <span>
                <input
                  type="password"
                  id="pass"
                  className="validation__input"
                  name="passwordUno"
                  onChange={onChangeInput}
                  value={values.passwordUno}
                  placeholder="* Contraseña"
                  autoComplete="off"
                />
              </span>
              <span>
                <input
                  type="password"
                  id="rpass"
                  onChange={onChangeInput}
                  value={values.passwordDos}
                  name="passwordDos"
                  className="validation__input"
                  placeholder="* Repetir contraseña"
                  autoComplete="off"
                />
              </span>
              <span>
                <input
                  type="submit"
                  className="validation__submit"
                  value="Enviar"
                />
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
