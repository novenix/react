//es el componente minimo de las playlist
//el coso donde se ven las imagenes del video
//importar componente de react
import React,{Component} from 'react';
//importar hoja de estilos
import './media.css'
//se puede escribir componente en 3 modos
//funcional, puro, componente de estado
class Media extends React.Component{
    //extender componentes de react para los porpios
    //tiene adentro la forma del html
    //JSX: sintaxis de react para construir elementos
    //render es parte de react
    render(){
        //para poner estilos, puede poner una hoja de estilos, o estilos en linea
        //usar en linea
        //crear variable para los estilos
        //los estilos son creados como objetos
        const styles={
            container:{
                //14 px(pixeles)
                fontSize:14,
                color:'#44546b',
                //que sea clikeable
                cursor:'pointer',
                //260px
                width:260,
                border:'1px solid red'
            }
        }
        return(
            // se puede hacer estilos en linea
            // <div style={styles.container}>
            //tambien se puede usar el css
            <div  className="Media-cover"  >
            {/* className="Media" className="Media:hover" */}
                <div>
                    <div className="Media-image" >
                        <img
                        //lamar la ruta de la imagen del componente
                        src="./images/covers/logo-og.png"
                        alt="" 
                        width={260}
                        height={135}
                         />
                    </div>
                    {/* center aling hace arte de la descarga de materialize */}
                     <div className="Media-title" >
                        <p>Que disfrutes esta web de video</p>
                    </div>

                    <div className="Media-author"className="center align">
                        <p>Novenix :)</p>
                    </div>
                    {/* aqui hace parte casi todo de la libreria de materialize descargada en index.html */}
                    <div className="card-action center align">
                        <a className="waves-effect waves-light btn" href="#">entrar</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
//exportar componente en react
export default Media