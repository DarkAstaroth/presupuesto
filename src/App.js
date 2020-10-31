import React, { useState } from 'react';
import Pregunta from './components/Pregunta.js'
import Formulario from './components/Formulario.js'
import Listado from './components/Listado.js'
import ControlPresupuesto from './components/ControlPresupuesto.js'


function App() {

  // Definir el state

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);

  const [Gastos, setGastos] = useState([]);

    // cuando agreguemos un nuevo gasto
    
    const agregarNuevoGasto = gasto =>{
        setGastos([
          ...Gastos,
          gasto
        ])
    }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ?
            (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setPregunta={setPregunta}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    Gastos={Gastos}
                  />

                  <ControlPresupuesto
                    presupuesto = {presupuesto}
                    restante = {restante}
                  />
                </div>
              </div>
            )
          }



        </div>
      </header>
    </div>
  );
}

export default App;
