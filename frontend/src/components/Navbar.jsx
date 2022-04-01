import React from "react";
import "./Navbar.css";
import {
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src="assets/denso-logo.png" alt="Logo Denso Navbar" height={25} />
      <div className="Navbar-menu-principal">
        <Link to="/home" className="Link-navbar">Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/results-page" className="Link-navbar">Resultados</Link>
      </div>
      <div className="Submenu-usuario">
        {/* <img src="assets/denso-logo.png" alt="Foto Usuario" height={25}></img> */}
        {/* Revisar porque NO JALA LO DE ABAJO SASS*/}
        <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
            "Nombre"
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cerrar Sesión</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
