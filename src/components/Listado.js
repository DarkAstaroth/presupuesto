import React from 'react'
import Gasto from './Gasto'

const Listado = ({Gastos}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {Gastos.map(gasto =>(
            <Gasto
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
);
 
export default Listado;