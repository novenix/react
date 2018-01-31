// console.log('holo mundo')
//importar react
//react exactamente sirve ara crear los componentes
import React from 'react'
//react dom es para poner los componentes en algun lado
//import ReactDOM from 'react-dom'
//tambien se puede importar {render} de react dom para solo usar render 
import {render} from 'react-dom'
//importar componente de video
import Media from './src/playlist/componentes/media'
// importar html
const app=document.getElementById('app')
//crear lugar de dom en el html el id llamarlo en 
//parametros:(que voy a renderizar , donde lo hare)
//rends= es lo que se va a renderizar
//const rend=<h1>hola, esto es NOVE-VIDEO, bienvenido</h1>
//lo que se va  arenderizar puede ser un elemento de react o un componente de react
//ReactDOM.render(rend,app)
//para solo llamar render solo se debe escribir render
render(<Media/>,app)