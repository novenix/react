import React,{Component} from 'react'
import Search from '../components/search'
class SearchContainer extends Component{
    state={
        value:'luis fonsi'
    }
    handleSubmit=event=>{
        // prevenir que la pagina recarge
        event.preventDefault();
        console.log(this.input.value,'submit')
    }
    // funcion que recibe el elemento html como parametro
    // lo maeja
    setInputRef =element =>{
        this.input=element;
    }
    // manejar cambio del input
    handleInputChange=event=>{
        // valor del target
        // para poner los - entre palabras (hola-pepe) replace(que reemplaza, a reemplazar)
        this.setState({
            value:event.target.value.replace(' ','-')
        })
    }
    render(){
        return (
            <Search
            // llammar la referencia del component
            setRef={this.setInputRef}
            // BUCADOR MANEJA EL HANDLE
            handleSubmit={this.handleSubmit}
            // manejar change del component(evento)
            handleChange={this.handleInputChange}
            // 
            value={this.state.value}
            />
        )
    }
}
export default SearchContainer