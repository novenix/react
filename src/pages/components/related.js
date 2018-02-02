// es la barra de relacionados
import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'
function Related(props){
    return(
        <div className='Related' >
            <img src={logo} width={259}/> 
        </div>
    )
}
export default Related