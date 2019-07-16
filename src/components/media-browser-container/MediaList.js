import React from 'react'
import MediaItem from './MediaItem'

import Media from '../../resources/Media'

class MediaList extends React.Component{
	render(){
		const MediaListElement = Media.map(mediaGallery => <MediaItem
			key={mediaGallery.id}
			image={mediaGallery.imageUrl}
			alternative={mediaGallery.alternative}
			timestamp={mediaGallery.timestamp}
			description={mediaGallery.description}
		/>)

		return(
			<div className="row px-3">
				{MediaListElement}
			</div>
		)
	}
}

export default MediaList