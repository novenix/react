import React from 'react';
import Playlist from '../playlist/componentes/playlist'
// import './playlist.css'
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
function Categorias(props) {
        //no hay ciclo de vida aca, es mejor el componente funcional
    
        //renderizar solo 1 categoria del api.json, el .playlist es el playlist de el api.json
        console.log(props[0].title)
        //console.log(Categorias)
        return (
            <div className="Category">
            <p className="Category-description">{props.data.description}</p>
            <h2 className="Category-title">{props.data.title}</h2>
            <Playlist
                //handleOpenModal={props.handleOpenModal}
                playlist={props.data.playlist}
            />
            </div>
        )
    }

export default Categorias