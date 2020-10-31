import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, setnombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    

    const agregarGasto = e=>{
        e.preventDefault();

        // Validar

        if (cantidad <1 || isNaN(cantidad || nombre.trim() === '')) {
            setError(true)            ;
            return;
        }
        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal

        agregarNuevoGasto(gasto);

        // resetear el form

        setnombre('');
        setCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >

            <h2>Agrega tus gastos</h2>

            {error ? <Error mensaje = "Ambos campos son obligatorios o presupuesto incorrecto"/> : null}

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=>setnombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e=>setCantidad(parseInt(e.target.value,10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
    );

}


export default Formulario;