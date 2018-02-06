import React,{Component} from 'react'
//componente inteligente: container
import HomeLayout from '../components/home-layout'
//lamar las categoriasa mara mostrar en la ui
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../errores/container/handleError'
import VideoPlayer from '../../player/container/video-player'
class Home extends Component{
    state = {
        modalVisible:false,
        
    }
    handleOpenModal=()=>{
        this.setState({
            modalVisible:true,
        })
    }
    handleCloseModalClick = (event)=>{
        
        // setear estado
        this.setState({
            // la visibilidad del estado es falso
            modalVisible:false,
        })
    }
    
    render(){
        // manejar los errorres de todo el home layout
        
        return(
            <HandleError>
                <HomeLayout>
                    <VideoPlayer
                        autoplay
                    />
                    {/* hijos del home */}
                    <Categories 
                        
                        // categories={this.props.data}
                        categories={this.props.data.categories}

                        // {/* pasamos el click */}
                        handleOpenModal={this.handleOpenModal}
                        />
                    
                    
                    <Related/>
                    {/* reproductor de video */}
                    
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
            </HandleError>
        )
    }
}

export default Home