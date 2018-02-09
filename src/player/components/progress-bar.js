// barra de progreso del video player
import React from 'react'
import'./progress-bar.css'
function ProgressBar(props){
    return(

        <div className='ProgressBar'>
            <input
                type="range"
                min={0}
                // LA DURACION maxima que tiene el video en la barrita
                max={props.duration}
                // value es el valor del currentime en la barrita de duracion
                value={props.value}
                onChange={props.handleProgressChange}
            />
        </div>
    )
}
export default ProgressBar