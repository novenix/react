import React,{Component} from 'react'
import {createPortal} from 'react-dom'
class ModalContainer extends Component{
    render(){
        // retornar portal de react(funcion)
        // (que va a renderizar,donde)
        return createPortal (
            this.props.children,
            document.getElementById('modal-container')
        )
    }
}

export default ModalContainer 