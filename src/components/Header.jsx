import React, { useState } from "react";
import { FaArrowUp } from 'react-icons/fa';
import { Link as Scroll } from "react-scroll";
import logo from "../assets/logo.png";
import logoEsis from "../assets/logo-esis.svg";

import './Header.css';
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
//https://www.npmjs.com/package/react-scroll
const Header = ({ state }) => {
    //   const { username, status } = useSelector((state) => state.auth);

    const [btnToggle, setBtnToggle] = useState(false)
    const [navContainer, setNavContainer] = useState(false)
    const [navToggle, setNavToggle] = useState(false)

    const onMenuToggle = () => {
        setBtnToggle(!btnToggle)
        setNavContainer(!navContainer)
        setNavToggle(!navToggle)
    };

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(setLogout())
    };

    const logearse = () => {
        navigate("/login");
    };

    return (
        <>
            <header className="header">
                <div onClick={onMenuToggle} className={`button-toggle ${btnToggle ? 'active' : ''}`}>
                    <div className="linea-toggle"></div>
                </div>
                <div className={`header-nav ${navContainer ? 'nav-container__active' : ''}`}>
                    <nav className={`main-nav ${navToggle ? 'nav-toggle__active' : ''}`}>
                        <ul className="main-nav__list flx-a-c">
                            <li className="main-nav__item">
                                <a className="main-logo" href="#">
                                    <img
                                        className="main-logo__img"
                                        src={logo}
                                        alt="Logo-esis-postmaster"
                                    />
                                </a>
                            </li>
                            <li className="main-nav__item" id="link">
                                {state ? (
                                    <Scroll
                                        className="main-nav__link"
                                        to="horario"
                                        smooth={false}
                                        offset={0}
                                        duration={600}
                                        onClick={onMenuToggle}
                                    >
                                        Horario
                                    </Scroll>
                                ) : (
                                    <a className="main-nav__link" onClick={logearse}>
                                        Horario
                                    </a>
                                )}
                            </li>
                            <li className="main-nav__item" id="link">
                                {state ? (
                                    <Scroll
                                        className="main-nav__link"
                                        to="ponentes"
                                        smooth={false}
                                        offset={0}
                                        duration={600}
                                        onClick={onMenuToggle}
                                    >
                                        Ponentes
                                    </Scroll>
                                ) : (
                                    <a className="main-nav__link" onClick={logearse}>
                                        Ponentes
                                    </a>
                                )}
                            </li>
                            <li className="main-nav__item" id="link">
                                {state ? (
                                    <Scroll
                                        className="main-nav__link"
                                        to="talleres"
                                        smooth={false}
                                        offset={10}
                                        duration={600}
                                        onClick={onMenuToggle}
                                    >
                                        Talleres
                                    </Scroll>
                                ) : (
                                    <a className="main-nav__link" onClick={logearse}>
                                        Talleres
                                    </a>
                                )}
                            </li>
                            <li className="main-nav__item" id="link">
                                {state ? (
                                    <Scroll
                                        className="main-nav__link"
                                        to="questions"
                                        smooth={false}
                                        offset={-100}
                                        duration={600}
                                        onClick={onMenuToggle}
                                    >
                                        Preguntas Frecuentes
                                    </Scroll>
                                ) : (
                                    <a className="main-nav__link" onClick={logearse}>
                                        Preguntas Frecuentes
                                    </a>
                                )}
                            </li>
                            <li className="main-nav__item" id="link">
                                {state ? (
                                    <Scroll
                                        className="main-nav__link"
                                        to="efe"
                                        smooth={false}
                                        offset={0}
                                        duration={600}
                                        onClick={onMenuToggle}
                                    >
                                        Lugar
                                    </Scroll>
                                ) : (
                                    <a className="main-nav__link" onClick={logearse}>
                                        Lugar
                                    </a>
                                )}
                            </li>
                            <li className="main-nav__item" id="link">
                                {state ? (
                                    <Scroll
                                        className="main-nav__link"
                                        to="hackaton"
                                        smooth={false}
                                        offset={0}
                                        duration={600}
                                        onClick={onMenuToggle}
                                    >
                                        Concurso de Programación
                                    </Scroll>
                                ) : (
                                    <a className="main-nav__link" onClick={logearse}>
                                        Concurso de Programación
                                    </a>
                                )}
                            </li>
                            {/* <li className="main-nav__item" id="link">
                                {state ? (
                                    <Scroll
                                        className="button__link"
                                        to="/"
                                        smooth={false}
                                        offset={0}
                                        duration={600}
                                        onClick={onMenuToggle}
                                    >
                                    <a className="button__link" onClick={logearse}>
                                        Iniciar Sesión
                                    </a>
                                    </Scroll>
                                ) : (
                                    <a className="button__link" onClick={logearse}>
                                        Iniciar Sesión
                                    </a>
                                )}
                            </li> */}

                            {/* BUTTON DETAILS CHECK */}
                            {/* <li className="main-nav__item">
                                <button className="button--details">
                                    <span>
                                        <span className="button__row"></span>
                                        <span className="button__row"></span>
                                        <span className="button__row"></span>
                                    </span>
                                </button>
                            </li> */}
                            {/* END BUTTON DETAILS */}
                            <li className="main-nav__item">
                                <a className="main-logo--unjbg">
                                    <img
                                        className="main-logo__img--unjbg"
                                        src={logoEsis}
                                        alt="Logo-esis-postmaster"
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Scroll
                    className="arrow-up"
                    to="inicio"
                    smooth={false}
                    offset={0}
                    duration={600}
                >
                    <FaArrowUp />
                </Scroll>
            </header>


        </>
    );
};

export default Header;
