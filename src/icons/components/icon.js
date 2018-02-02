//aqui configuraremos los iconos en general
//es un componente
import React from 'react'
function Icon(props){

    const { 
        color,
        size,
    }=props
    //retorna lo que tiene nuestro icono
    return(
        <svg 
            // si no se pone el const se escribiria fill={props.color} height={props.height}
            fill={color}
            height={size}
            width={size}
            viewBox="0 0 32 32"
         >
            
            {/* usar composicion de elementos de react */}
            {/* cada vez que importe icono lo va a mandar a su hijo, el play o volumen */}
            {/* aqui se maneja el view box y el svg  */}
            {props.children}
        </svg>
    )
}
export default Icon