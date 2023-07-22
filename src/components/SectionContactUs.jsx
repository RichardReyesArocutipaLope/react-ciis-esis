import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaFacebook, FaQuestion, FaYoutube } from 'react-icons/fa';
import Swal from 'sweetalert2';
import appApi from '../api/appApi';
// import { fetchInsciption } from '../../slices/auth.slice';
import { useForm } from '../hooks/useForm';
import { InputPaises } from './InputPaises';
import './SectionContactUs.css';

const SectionContactUs = () => {
  const refRecatcha = useRef(null);
  const [values, handleInputChange, reset, setEsta] = useForm({
    Email: '',
    NombreCompleto: '',
    CentroEducativo: '',
    Pais: 'PE',
    Tipo: 'Interior',
  });

  // TODO: Richard cpp
  // Token para la api de countries
  // _zWEpUtrf2FlHxSalhAB5nYdTQrt0EdSAZNgucOkGDryHasNrz2XmONUaRv5xgDtZhs
  //  auth_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ2bWlyZWxlc2JAdW5qYmcuZWR1LnBlIiwiYXBpX3Rva2VuIjoiX3pXRXBVdHJmMkZsSHhTYWxoQUI1bllkVFFydDBFZFNBWk5ndWNPa0dEcnlIYXNOcnoyWG1PTlVhUnY1eGdEdFpocyJ9LCJleHAiOjE2NjY5NTI5NTB9.a-_oGkSONMa053f9dGSazjgIhrp8OkLhfg83gEIBRPU

  const { Email, NombreCompleto, CentroEducativo, Pais } = values;

  const handleSubmit = async (e) => {
    console.log(e);
    console.log(values);
    e.preventDefault();
    if (refRecatcha.current.getValue()) {
      const token = refRecatcha.current.getValue();
      if (
        values.Email === '' &&
        values.NombreCompleto === '' &&
        value.CentroEducativo === '' &&
        values.Pais === '' &&
        values.Tipo === ''
      ) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Porfavor rellena los campos vacios',
        });
      } else {
        try {
          const resp = await appApi.post('/auth/register-asistente', {
            Email: values.Email,
            NombreCompleto: values.NombreCompleto,
            CentroEducativo: values.CentroEducativo,
            Pais: values.Pais,
            Tipo: values.Tipo,
            token,
          });
          // console.log(resp);
          if (resp.status === 201) {
            Swal.fire({
              icon: 'success',
              title: 'Usuario Registrado!.',
              text: 'Gracias por inscribirte en el evento',
              footer:
                '<p>Por favor revisa tu correo, para tener mayor información</p>',
            });
          }
        } catch (error) {
          // console.log(error);
          const { message, statusCode } = error.response.data;
          if (statusCode == 404) {
            Swal.fire({
              icon: 'warning',
              title: 'Warning!',
              text: message,
            });
          } else if (statusCode == 409) {
            Swal.fire({
              icon: 'warning',
              title: 'Warning!',
              text: message,
            });
          } else if (statusCode == 502) {
            Swal.fire({
              icon: 'warning',
              title: 'Error!',
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
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Marca el recaptcha',
      });
    }
  };

  return (
    <section className="section-contactanos__wrapper">
      <div className="section-contactanos__overlay"></div>
      <div className="section-contactanos section-xl">
        <div className="section-contactanos__container" id="contactanos">
          <div className="section-inscription">
            <div className="contactanos__form-container">
              <h2 className="contactanos__form-title">Inscripción</h2>
              <p className="contactanos__form-help">
                Para obtener más informacion, no dude en ponerse en contacto
              </p>
              <form onSubmit={handleSubmit} className="contactanos__form">
                <div className="inputs">
                  <div className="input_container_row">
                    <div className="input__container">
                      <input
                        className="input__item"
                        id="inputName"
                        type="text"
                        autoComplete="ÑÖcompletes"
                        name="NombreCompleto"
                        placeholder="&nbsp;"
                        value={NombreCompleto}
                        onChange={handleInputChange}
                      />
                      <label className="input__label" htmlFor="inputName">
                        Nombres y Apellidos
                      </label>
                    </div>

                    <div className="input__container">
                      <input
                        className="input__item"
                        id="inputEmail"
                        type="email"
                        autoComplete="ÑÖcompletes"
                        name="Email"
                        placeholder="&nbsp;"
                        value={Email}
                        onChange={handleInputChange}
                      />
                      <label className="input__label" htmlFor="inputEmail">
                        Correo Electrónico
                      </label>
                    </div>
                  </div>

                  <div className="input_container_row">
                    <div className="input__container">
                      <input
                        className="input__item"
                        id="inputName"
                        type="text"
                        autoComplete="ÑÖcompletes"
                        name="CentroEducativo"
                        placeholder="&nbsp;"
                        value={CentroEducativo}
                        onChange={handleInputChange}
                      />
                      <label className="input__label" htmlFor="inputName">
                        Institución/Universidad
                      </label>
                    </div>

                    <div className="input__container">
                      <InputPaises
                        name={'Pais'}
                        value={Pais}
                        change={handleInputChange}
                      />
                    </div>
                  </div>

                  <div
                    className="input_container_column"
                    onChange={handleInputChange}
                  >
                    <div className="input__container">
                      <input
                        type="radio"
                        id="esis"
                        name="Tipo"
                        value="Interior"
                        defaultChecked
                        className="input-radio"
                      />
                      <label htmlFor="esis">
                        Estudiante ESIS, Certificación gratis
                      </label>
                    </div>
                    <div className="input__container">
                      <input
                        type="radio"
                        id="externo_sin_certificacion"
                        name="Tipo"
                        value="Exterior"
                        className="input-radio"
                      />
                      <label htmlFor="externo_sin_certificacion">
                        Público general, Sin certificación
                      </label>
                    </div>

                    <div className="input__container">
                      <input
                        type="radio"
                        id="externo_con_certificacion"
                        name="Tipo"
                        value="Exterior con certificacion"
                        className="input-radio"
                      />
                      <label htmlFor="externo_con_certificacion">
                        Público general, Con certifación a s/20 soles
                      </label>
                    </div>
                  </div>
                </div>
                <div className="inputs inputs--re-enviar">
                  <div className="input__container--center">
                    <div className="recaptcha">
                      <ReCAPTCHA
                        ref={refRecatcha}
                        sitekey="6LffQ74hAAAAADLMzHqLNMWJgy8Rzl4i856yFAu1"
                      />
                    </div>
                  </div>
                  <div className="input__container--center">
                    <button
                      className="button__link button__link--relative"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>

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
          </div>

          <div className="section-info">
            <h2 className="section-info__title">Contáctanos</h2>
            <p className="section-info__description">
              El Congreso Internacional de Informática y Sistemas XXIII se
              realizará del 07 al 11 de noviembre del 2022 en la Universidad
              Nacional Jorge Basadre Grohmann.
            </p>
            <h3 className="section-info__data">Dirección</h3>
            <p className="section-info__description">
              Miraflores S/N, Tacna 23000
            </p>
            <h3 className="section-info__data">Telefono</h3>
            <p className="section-info__description">
              +51 927 227 018
              <br />
              +51 960 242 433
              <br />
              +51 944 501 941
            </p>
            <h3 className="section-info__data">Correo</h3>
            <p className="section-info__description">ciistacna@unjbg.edu.pe</p>
            <div className="section-info__social-icon">
              <a
                className="section-info__icon"
                href="https://www.facebook.com/ciistacna"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="section-info__icon"
                href="https://www.youtube.com/c/ciistacna"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="questions" id="questions">
          <h2 className="questions__title">Preguntas Frecuentes</h2>
          <div className="question__card">
            <div className="question__icon">
              <FaQuestion />
            </div>
            <div className="question__content">
              <h2 className="question__question">
                ¿Quién puede asistir al CIIS XXIII?
              </h2>
              <p className="question__response">
                Cualquier persona, las inscripciones están abiertas para todos,
                desde un estudiante hasta profesionales del área.
              </p>
            </div>
          </div>

          <div className="question__card">
            <div className="question__icon">
              <FaQuestion />
            </div>
            <div className="question__content">
              <h2 className="question__question">
                ¿Como puedo asistir al evento?
              </h2>
              <p className="question__response">
                La totalidad de las ponencias sera transmitida a traves de
                nuestras redes sociales. También puedes acompañarnos
                presencialmente:
                <br /> Las ponencias presenciales tendrán lugar los días 07 y 11
                de noviembre de 2022 en el Auditorio Central de la UNJBG. <br />{' '}
                Las ponencias virtuales tendrán lugar los días 08, 09 y 10 de
                noviembre de 2022 en el Auditorio de Educación de la UNJBG.
                <br />
                Los concursos y talleres solo se llevarán a cabo de manera
                presencial SIN por redes sociales.
              </p>
            </div>
          </div>

          <div className="question__card">
            <div className="question__icon">
              <FaQuestion />
            </div>
            <div className="question__content">
              <h2 className="question__question">
                ¿Tiene algún costo la inscripción?
              </h2>
              <p className="question__response">
                No, este evento totalmente gratuito, la certificación es
                opcional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContactUs;
