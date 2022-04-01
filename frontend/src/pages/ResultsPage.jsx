import React from 'react';
import './ResultsPage.css';
import Navbar from '../components/Navbar';

const ResultsPage = () => {
  return (
    <>
        <Navbar/>
        <h1 className='Top-hero'>
            Results Page
        </h1>
        <div className="Sistema-grid">
          {/* TODO: Cambiar el path de login y test-page a la página del examen */}
          <div>
            <div className="Caja-aprendizaje-rapido" style={{margin: "10px"}}>
                Aprendizaje Rápido
            </div>
            <p>Resultado 1</p>
          </div>
          <div>
            <div className="Caja-resolucion-problemas" style={{margin: "10px"}}>
                Resolución de problemas
            </div>
            <p>Resultado 2</p>
          </div>
          <div>
            <div className="Caja-trabajo-equipo" style={{margin: "10px"}}>
                Trabajo en Equipo
            </div>
            <p>Resultado 3</p>
          </div>
          {/* <img src="assets/AprendizajeRapidoIMG1080.png" style={{padding: "10px"}}></img>
          <img src="assets/denso-office.png" style={{padding: "10px"}}></img>
          <img src="assets/denso-office.png" style={{padding: "10px"}}></img> */}
        </div>
    </>
  )
}

export default ResultsPage