import React,{Component} from 'react'
//componente inteligente: container
import HomeLayout from '../components/home-layout'
//lamar las categoriasa mara mostrar en la ui
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
class Home extends Component{
    state = {
        modalVisible:true,
    }
    handleCloseModalClick = (event)=>{
        
        // setear estado
        this.setState({
            // la visibilidad del estado es falso
            modalVisible:false,
        })
    }
    render(){
        return(
            <HomeLayout>
                
                {/* hijos del home */}
                <Categories categories={this.props.data.categories} />
                
                <Related/>
                {/* contenedor modal */}
                {/* jsx condicionales */}
                {
                    this.state.modalVisible &&                
                    <ModalContainer>
                        <Modal 
                            handleClick={this.handleCloseModalClick}
                        >
                            <h1>esto es un portal</h1>
                        </Modal>                    
                    </ModalContainer>
                }
            </HomeLayout>
        )
    }
}

export default Home