import React from 'react'
import TLBodyControls from './TLBodyControls'
import TLBodyList from './TLBodyList'

function TLBody(){
	return(
		<div className="row text-white">
			<div className="col-3"><TLBodyControls/></div>
			<div className="col-9"><TLBodyList/></div>
		</div>
	)
}

export default TLBody