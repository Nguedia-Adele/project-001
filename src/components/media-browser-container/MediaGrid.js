import React from 'react'
import SearchBar from './SearchBar'
import MediaList from './MediaList'

function MediaGrid(){
	return(
		<div className="pt-3 bg-dark">
			<SearchBar/>
			<hr/>
			<MediaList/>
		</div>

	)
}

export default MediaGrid