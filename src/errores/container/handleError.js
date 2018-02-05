import React,{Component} from 'react'
import RegularError from '../components/regular-error'
class HandleError extends Component{
    state={
        handleError:false,
    }
    // envia este error a un servicio com sentry
    componentDidCatch(error,info){
        
        this.setState({
            handleError:true,
        })
    }
    render(){
        if (this.state.handleError){
            return(
               <RegularError/>
            )
        }
        // si no se cumple la condicion, que retorne los hijos
        return this.props.children      
    }
}
export default HandleError