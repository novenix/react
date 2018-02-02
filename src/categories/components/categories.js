//componente de categoria, el tonto
import React from 'react'
import Category from './category'
import './categories.css'

function Categories(props){
    //lo que recibe categories es una lista de elementos, y se la envia a category que llama a playlist
    return (
        <div className='Categories' >
            {
                // mapear categories, tiene el elemento de categoria y se lo manda a su respectiva funcion
                props.categories.map((categoriy)=>{
                    // cada iterador debe tener su key
                    return <Category key={categoriy.id} {...categoriy}/>
                })
            }
        </div>
    )
}
export default Categories