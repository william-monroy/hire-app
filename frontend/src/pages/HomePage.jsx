import { Button } from "@nextui-org/react";
import './HomePage.css'
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    //Fragement --> lo de abajo
    <> 
      <Navbar />
      <div className="Altura">
        <div className="HomePage">
          <h1>Hola "nombre"</h1>
          <p>Favor de contestar los siguientes apartados para terminar tu vacante de empleo.</p>
        </div>
        <div className="Sistema-grid">
          {/* TODO: Cambiar el path de login y test-page a la página del examen */}
          <Link to="/login" className="Caja-aprendizaje-rapido" style={{margin: "10px"}}>
            Aprendizaje Rápido
          </Link>
          <Link to="/login" className="Caja-resolucion-problemas" style={{margin: "10px"}}>
            Resolución de problemas
          </Link>
          <Link to="/test-page" className="Caja-trabajo-equipo" style={{margin: "10px"}}>
            Trabajo en Equipo
          </Link>
          {/* <img src="assets/AprendizajeRapidoIMG1080.png" style={{padding: "10px"}}></img>
          <img src="assets/denso-office.png" style={{padding: "10px"}}></img>
          <img src="assets/denso-office.png" style={{padding: "10px"}}></img> */}
        </div>
        <div className="HomePage">
          <Button color="primary">Ver Resultados</Button>
        </div>
      </div>
    </>
  )
}

export default HomePage