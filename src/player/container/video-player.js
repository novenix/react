import React,{Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
class VideoPlayer extends Component{
    state={
        pause:true,    
    }
    togglePlay=(event)=>{
        this.setState({
            pause: !this.state.pause
        })
    }
    // cambiar estado de propiedades del video player
    componentDidMount(){
        this.setState({
            pause:(!this.props.autoplay)
        })
    }
    render(){
        return (
            
                <VideoPlayerLayout>
                    <Title 
                        title="el video del conejo"
                    />
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePlay}  />
                    {/* video extenralizado */}
                     <Video 
                    // enviar si es autoplay a video
                        autoPlay={this.props.autoplay}
                        // envia estado a video, el componente del video envia todo, hasta tiempo transcurrido
                        pause={this.state.pause}
                        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" 
                    /> 
                </VideoPlayerLayout>
            
        )
    }
}
export default VideoPlayer