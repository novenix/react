import React from 'react'
import './video-player-layout.css'
const VideoPlayerLayout=(props)=>(
    <div className="VideoPlayer" >
        {/* renderiza sus hijos */}
        {props.children}
    </div>
)
export default VideoPlayerLayout