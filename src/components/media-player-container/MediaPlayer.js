import React from 'react'
import './styles/MediaPlayer.css'

import cat from '../../resources/cat.mp4'

function Media(){
	return(
		<div className="video-container">
			<video controls className="video-player">
	            <source src={cat} type="video/mp4"/>
	            Your browser does not support the video tag.
	        </video>
        </div>
	)
}

export default Media