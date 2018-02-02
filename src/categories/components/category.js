//es la categoria sola
import React from 'react'
import Playlist from '../../playlist/componentes/playlist'
import './category.css'
function Category(props){
    return (
        <div className='Category' >
            {/* la categoria tiene sus parametrros */}
            <p className='category-description' >{props.description}</p>
            <h2 className='category-title' >{props.title}</h2>
            {/* // llama a playlist para que haga lo suyo */}
            {/* //la playlist tiene su propio iterador, le envio playlist para que itere sobre si misma */}
            <Playlist
            // el playlist del props corresponde al api.json
            playlist ={props.playlist} />
                

        </div>
    )
}
export default Category