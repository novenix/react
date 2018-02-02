// aqui contiene el layout, solo ui
import React from 'react'
import './home-layout.css'
function HomeLayout(props){
    return (
        <section className='HomeLayout' >            
            {props.children}
        </section>

    )
}
export default HomeLayout