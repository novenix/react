// console.log('holo mundo')
//importar react
//react exactamente sirve ara crear los componentes
import React from 'react'
//react dom es para poner los componentes en algun lado
//import ReactDOM from 'react-dom'
//tambien se puede importar {render} de react dom para solo usar render 
import {render} from 'react-dom'
//importar componente playlist
// import Playlist from './src/playlist/componentes/playlist.js'
import Home from '../pages/containers/home'
//importar los datos de los videos, para lectura desde json(objetos)
 import data from './../api.json'
// import Categorias from './src/categorias/categorias'
// importar html
const app=document.getElementById('app')
//home solo renderiza container home
//crear lugar de dom en el html el id llamarlo en 
//parametros:(que voy a renderizar , donde lo hare)
//rends= es lo que se va a renderizar
//const rend=<h1>hola, esto es NOVE-VIDEO, bienvenido</h1>
//lo que se va  arenderizar puede ser un elemento de react o un componente de react
//ReactDOM.render(rend,app)
//para solo llamar render solo se debe escribir render
//se pueden tener propiedades y enviarla
//si llega un audio o video se pone type="video"
//render(<Media type="video" title='Mi Primer video Nove-video' author="Nicolas Torres" image="./images/covers/logo-og.png" btonTxt="entrar"/>,app)
//ir a componente que tenga media con toda la playlist y renderize
render(<Home data={data}/>,app)
// render(<Categorias data={data}/>,app)