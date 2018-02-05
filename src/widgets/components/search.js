import React from 'react'
import './search.css'
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }
// cuando se pone una arrow ()=>() se retorna absolutamente todo lo que está dentro del () 
const Search = (props) =>(
    <form className="Search"
        // lanzar evento al buscar
        // evia manejador
        onSubmit={props.handleSubmit}
    >
        <input 
            // referencias a elemetos html en react
            ref={props.setRef}
            type="text"
            placeholder="Busca tu video favorito"
            className="Search-input"
            //post en la url para que aparezca (/search-patata)
            // busqueda por get
            name='search'
            // majejar el cambio de estado del elemento
            onChange={props.handleChange}
            // manipular el value para poner en vez de espacios, guines para buscar:hola pepe=>hola-pepe
            value={props.value}
            // defaultValue='luis fonsi'
        />
    </form>
)
export default Search