import React,{Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import leftPad from '../../utilities/utilities'
import ProgresBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume.js'
import FullScreen from '../components/fullscreen';

class VideoPlayer extends Component{
    state={
        pause:true,    
        duration:0,
        currentTime:0
    }
    // estado inicial de el video
    togglePlay=(event)=>{
        this.setState({
            pause: !this.state.pause,
            
        })
    }
    // cambiar estado de propiedades del video player
    componentDidMount(){
        this.setState({
            pause:(!this.props.autoplay)
        })
    }
    // se tiene quien disparó el evento
    handleLoadedMetadata=event =>{
        this.video=event.target;
        this.setState({
            duration:this.video.duration
        })
    }
    handleTimeUpdate=event =>{
        // console.log(this.video.currentTime)
        // pasarselo a un estado
        this.setState({
            currentTime:this.video.currentTime,
        })
    }
    // esta funcion es para tener el format de el tiempo del video en minutos y segundos
    // recibe segundos y lotransforma a minutos y segundos
     formatedTime=(secs)=>{
    // el segundo parametro es el parseo de entero
    const minutes=parseInt(secs/60,10)
    const seconds= parseInt(secs%60,10)
    return `${minutes}:${leftPad(seconds.toString())}`
    }
    // handleprogress es el evento que permite manejar la posicion del video en la barrita
    handleProgressChange=event=>{
        // setear nuevo tiempo es currentime
        this.video.currentTime=event.target.value;
    }
    // las propiedades estan en video, carga el spiner
    handleSeeking=(event)=>{
        this.setState({
            loading:true
        })
    }
    // deja de cargar el spiner
    handleSeeked=(event)=>{
        this.setState({
            loading:false
        })
    }
    handleVolumeChange=event=>{

            // valor input de rango del volumen
            // asignarselo al video
            this.video.Volume = event.target.value
        
    }
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
          // mando a full screen
          this.player.webkitRequestFullscreen()
        } else {
          document.webkitExitFullscreen();
          // salgo del full screen
        }
      }
      setRef = element => {
        this.player = element
      }
    render(){
        return (
            
                <VideoPlayerLayout
                // para fullscreen

                    setRef={this.setRef}
                >
                    <Title 
                        title={this.props.title}
                    />
                    <Controls>
                        <PlayPause 
                            pause={this.state.pause}
                            handleClick={this.togglePlay}  />
                        <Timer
                            duration={this.formatedTime(this.state.duration)}
                            currentTime={this.formatedTime(this.state.currentTime)}
                            
                        />
                        <ProgresBar 
                            duration={this.state.duration}
                            // el punto en e que esta el video en la barrita, se el envia a progressbar porque value es el que permite ver la posicion de la barrita
                            value={this.state.currentTime}
                            handleProgressChange={this.handleProgressChange}
                        />
                        <Volume 
                            handleVolumeChange={this.handleVolumeChange}
                        />
                        <FullScreen
                            handleFullScreenClick={this.handleFullScreenClick}
                        />
                    </Controls>
                    <Spinner 
                        // validar el estado del spiner
                        active={this.state.loading}    
                    />

                    {/* video extenralizado */}
                     <Video 
                    // enviar si es autoplay a video
                        autoPlay={this.props.autoplay}
                        // envia estado a video, el componente del video envia todo, hasta tiempo transcurrido
                        pause={this.state.pause}
                        // controla la duracion del video
                        handleLoadedMetadata={this.handleLoadedMetadata}
                        // maneja el currentime del video
                        handleTimeUpdate={this.handleTimeUpdate}
                        // 
                        handleSeeking={this.handleSeeking}
                        // 
                        handleSeeked={this.handleSeeked}
                        src={this.props.src}
                    /> 
                </VideoPlayerLayout>
            
        )
    }
}
export default VideoPlayer
