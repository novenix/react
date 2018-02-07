import React from 'react'
import './timer.css'

function Timer (props){
    return (
        <div className='Timer' >
            <p>
                {/* tiempo transcurrido vs duracion */}
                <span>00/{props.duration}</span>
            </p>
        </div>
    )
}
export default Timer