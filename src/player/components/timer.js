import React from 'react'
import './timer.css'

function Timer (props){
    return (
        <div className='Timer' >
            <p>
                {/* tiempo transcurrido vs duracion */}
                {/* se envia el tiempo para formatear de la duracion y del tiempo actual */}
                <span>{ props.currentTime}/{props.duration}</span>
            </p>
        </div>
    )
}
export default Timer