// componente de playlist
//importa media para renderizar diferentes componentes de media
// import React,{Component} from 'react';
//no hay que importar component porque no es para actualizar al instante(creo)
import React from 'react';
import Media from './media.js'
import './playlist.css'

//componente funcional:es en una funcion, es mejor que una clase porque no hay
//que usar render, no tiene un ciclo de vida
// function Playlist(props){
//     return (
//         <div onClick={handleClick} >
//             {props}
//         </div>
//     )
// }
//usand componente funcional
function Playlist(props) {
        //no hay ciclo de vida aca, es mejor el componente funcional
    
        //renderizar solo 1 categoria del api.json, el .playlist es el playlist de el api.json
        // const playlist=props.data.categories[0].playlist
        // console.log(props.data)
        return (
            //llamar el estilo que se quiere para la playlist, la clase del css se llama playlist
            <div className='Playlist' >
            
            {
                // mapear cada elemento de la playlist y hacer componentes
                props.playlist.map((item)=>{
                    //pasar los datos a media
                    //a key se le debe poner un valor dinamico, el id de cada elemento que trae
                    //ecma anterior
                    // return <Media title={item.title} author={item.author} image={item.cover} btonTxt="agregar a playlist" key={item.id} type={item.type} />
                    // ecma actual: con{...item} envia como propiedad a media cada atributo que tiene el objeto
                    return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
                    
                })    
            }
                
            </div>
        )
    }

export default Playlist


//////componente puro
// class Playlist extends Component{
//     render(){
//         //renderizar solo 1 categoria del api.json, el .playlist es el playlist de el api.json
//         const playlist=this.props.data.categories[0].playlist
//         console.log(this.props.data)
//         return (
//             //llamar el estilo que se quiere para la playlist, la clase del css se llama playlist
//             <div className='Playlist' >
//             {
//                 // mapear cada elemento de la playlist y hacer componentes
//                 playlist.map((item)=>{
//                     //pasar los datos a media
//                     //a key se le debe poner un valor dinamico, el id de cada elemento que trae
//                     //ecma anterior
//                     // return <Media title={item.title} author={item.author} image={item.cover} btonTxt="agregar a playlist" key={item.id} type={item.type} />
//                     // ecma actual: con{...item} envia como propiedad a media cada atributo que tiene el objeto
//                     return <Media {...item} key={item.id} />
                    
//                 })    
//             }
                
//             </div>
//         )
//     }
// }
// export default Playlist