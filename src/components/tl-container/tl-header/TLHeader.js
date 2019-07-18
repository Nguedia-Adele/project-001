import React from 'react'
import TLHeaderControls from './TLHeaderControls'
import TLHeaderRuler from './TLHeaderRuler'

function TLHeader(){
	return(
		<div className="pt-3 px-2">
			<div className="row">
				<div className="col-3 d-flex justify-content-start">
					<TLHeaderControls/>
				</div>
				<div className="col-9">
					<TLHeaderRuler/>
				</div>
			</div>
		</div>
	)
}

export default TLHeader