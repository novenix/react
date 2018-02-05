//componente de categoria, el tonto
import React from 'react'
import Category from './category'
import './categories.css'
// importar formulario de busqueda
import Search from '../../widgets/containers/search'
function Categories(props){
    //lo que recibe categories es una lista de elementos, y se la envia a category que llama a playlist
    return (
        <div className='Categories' >
        <Search/>
            {
                // mapear categories, tiene el elemento de categoria y se lo manda a su respectiva funcion
                props.categories.map((category)=>{
                    // cada iterador debe tener su key
                    return (<Category 
                        key={category.id} 
                        {...category}
                        handleOpenModal={props.handleOpenModal}
                        
                        />)

                })
            }
        </div>
    )
}
export default Categories