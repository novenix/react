import React from 'react'
import './video-player-layout.css'
const VideoPlayerLayout=(props)=>(
    <div className="VideoPlayer" 
        // llega set ref para fullscreen
        ref={props.setRef}
    >
        {/* renderiza sus hijos */}
        {props.children}
    </div>
)
export default VideoPlayerLayout