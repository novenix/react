//componente funcional de boton play
import React from 'react'
//llamar a padre para extender poderes
import Icon from './icon'
//el contenido del icono ya está con svg's
function Play(props){
    return (
        // lo que esté dentro de Icon es el children
        //...props envia todo lo que esté adentro que recibe desde s llamado
        //en envia todo props a Icon
        <Icon {...props} >
         {/* el path diferencia como se ve el play */}
            
            <path d="M6 4l20 12-20 12z"></path>
            
        </Icon>
        
    )
}

export default Play