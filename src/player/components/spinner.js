// carga el spinner del video(el coso de cargando)
import React from 'react'
import './spinner.css'
function Spinner(props){
    // validar estado del spinner
    if (!props.active)return null
    return (
        <div className='Spinner' >
            <span>cargando video...</span>
        </div>
    )
}

export default Spinner;