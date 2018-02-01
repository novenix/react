// componente de playlist
//importa media para renderizar diferentes componentes de media
import React,{Component} from 'react';
import Media from './media.js'
import './playlist.css'
class Playlist extends Component{
    render(){
        //renderizar solo 1 categoria del api.json, el .playlist es el playlist de el api.json
        const playlist=this.props.data.categories[0].playlist
        console.log(this.props.data)
        return (
            //llamar el estilo que se quiere para la playlist, la clase del css se llama playlist
            <div className='Playlist' >
            {
                // mapear cada elemento de la playlist y hacer componentes
                playlist.map((item)=>{
                    //pasar los datos a media
                    //a key se le debe poner un valor dinamico, el id de cada elemento que trae
                    //ecma anterior
                    // return <Media title={item.title} author={item.author} image={item.cover} btonTxt="agregar a playlist" key={item.id} type={item.type} />
                    // ecma actual: con{...item} envia como propiedad a media cada atributo que tiene el objeto
                    return <Media {...item} key={item.id} btonTxt="añadir a otra playlist" />
                    
                })    
            }
                
            </div>
        )
    }
}
export default Playlist