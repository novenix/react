//es el componente minimo de las playlist
//el coso donde se ven las imagenes del video
//importar componente de react
import React,{Component} from 'react';
//importar hoja de estilos
import './media.css'
//importar propTypes(si no vienen las propiedades que son de los componenetes)
import propTypes from 'prop-types'
//se puede escribir componente en 3 modos
//funcional, puro, componente de estado
class Media extends React.Component{
    //para enlazar evento con media con ecmascript 6
    // constructor(props){
    //     //herencia
    //     super(props)
    //     //enlazar el handle ckicl que llega lo enlaza con la clase y componente con ecmascript 6
    //     //this.handleClick=this.handleClick.bind(this)
    //     this.state={
    //         author:this.props.author}
    // }
    ///////////con ecmascript 7 
    state={
        
        author:this.props.author
    }
    // //manejar evento de click ya enlazado con ecma 6
    // handleClick(event){
    //     console.log(event)
    //     console.log(this.props.title)
    // }
    /////////con ecmascript 7
    handleClick=(event)=>{
        //console.log(this.props.image)
        //para modificar el estado del author (cambiar el valor)
        this.setState({
            // pasar los valores que quiere cambiar
            author:'pepe Pretzel' 
        })
    }
    //extender componentes de react para los porpios
    //tiene adentro la forma del html
    //JSX: sintaxis de react para construir elementos
    //render es parte de react
    render(){
        //para poner estilos, puede poner una hoja de estilos, o estilos en linea
        //usar en linea
        //crear variable para los estilos
        //los estilos son creados como objetos
        // const styles={
        //     container:{
        //         //14 px(pixeles)
        //         fontSize:14,
        //         color:'#44546b',
        //         //que sea clikeable
        //         cursor:'pointer',
        //         //260px
        //         width:260,
        //         border:'1px solid red'
        //     }
        // }
        return(
            // se puede hacer estilos en linea
            // <div style={styles.container}>
            //tambien se puede usar el css
            // para enlazar el evento que se quiere hacer se hace con onClick={this.handleClicl(manejador)}
            <div  className="Media-cover" onClick={this.handleClick} >
            {/* className="Media" className="Media:hover" */}
                <div>
                    <div className="Media-image" >
                        <img
                        //viene del cdd
                        //lamar la ruta de la imagen del componente
                        src={this.props.cover}
                        alt="" 
                        width={260}
                        height={135}
                         />
                    </div>
                    {/* center aling hace arte de la descarga de materialize */}
                    {/* //aqui se consume el valor de title , que se envió desde el dom */}
                    {/* this.props.title asi nos aseguramos que venga el valor de afuera*/}
                     <div className="Media-title" >{this.props.title}</div>

                    <div className="Media-author" className="center align">
                        {/* state si es mutable, a diferente de props(propiedades de componente) */}
                        {/* si vamos a usar state se pone this.state.author */}
                        <p>{this.props.author}</p>
                    </div>
                    {/* aqui hace parte casi todo de la libreria de materialize descargada en index.html */}
                    <div className="card-action center align">
                        <a className="waves-effect waves-light btn" href="#">{this.props.btonTxt}</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
//asignar proptypes(si no vienen los datos de las propiedades)
//solo es para validar el tipo de dato que llega, pero para validar si esta o o esta se pone
//(.isRequired)
//siempre se deben validar los proptypes
Media.propTypes={
    cover:propTypes.string.isRequired,
    //is required manda advertencia si no se manda el dato que deberia madar
    title:propTypes.string.isRequired,
    author:propTypes.string.isRequired,
    // oneOf es uno de que valores de texto, de tipo video o audio
    type:propTypes.oneOf(['video','audio']).isRequired
}
//exportar componente en react
export default Media