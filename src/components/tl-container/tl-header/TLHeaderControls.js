import React from 'react'
import MaterialIcon from 'material-icons-react'

function TLHeaderControls(){
	return(
		<div className="row">
			<div className="col-6">
				<MaterialIcon icon="add" color="#fff"/>
			</div>
			<div className="col-6">
				<MaterialIcon icon="compare" color="#fff"/>
			</div>
		</div>
	)
}

export default TLHeaderControls