import React,{Fragment,useState} from 'react';
import Error from './Error'

const Pregunta = ({setPresupuesto , setRestante , setPregunta}) => {
    
    // Definir el state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false)

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value,10))
    }

    // Submit para definir el presupuesto

    const agregarPresupuesto = e =>{
        e.preventDefault();

        // Validar

        if ( cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);
            return;
        }

        // Si se pasa lña validacion

        guardarError(false);

        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(false);
    }

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            
            {error ? <Error mensaje = "El presupuesto es incorrecto"/>: null}

            <form
                onSubmit = {agregarPresupuesto}
            >
                <input 
                    type="number"
                    className = "u-full-width"
                    placeholder = "Coloca tu presupuesto"
                    onChange = {definirPresupuesto}
                />

                <input 
                    type="submit"
                    className = "button-primary u-full-widht"
                    value = " Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;