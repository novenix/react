import React,{Component} from 'react'
import './video.css'
// componente de video en pantalla
class Video extends Component{
    togglePlay(){
    // hacer referencia a el mismo
    // hecho en video
        if(this.props.pause){
            // elemento html donde se le mando el autoplay
            this.video.play()
        }
        else{
            this.video.pause()
        }
    }
    componentWillReceiveProps(nextProps){
        // validar propiedades con las que el componente ya tiene
        if(nextProps.pause !== this.props.pause){
            this.togglePlay();
        }
    }
    // recibe elemento
    setRef=element=>{
        this.video=element;
    }
    render(){
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
        }=this.props;
        
        return (
            <div>
                <video className="Video"
                    // llegan com elemento
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    ref={this.setRef}
                    // barra duracion del video
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                />
            </div>
        )
    }
}
export default Video;