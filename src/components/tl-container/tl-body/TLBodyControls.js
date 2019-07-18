import React from 'react'
import MaterialIcon from 'material-icons-react'

function TLBodyControls(){
	return(
		<div className="text-white">
			<TLControl/>
			<TLControl/>
			<TLControl/>
		</div>
	)
}

function TLControl(){
	return(
		<div>
			<div className="row px-2" style={{height:"30px"}}>
				<div className="col-1">
					<MaterialIcon icon="mic" size="tiny" color="#fff"/>
				</div>
				<div className="col-7">
					<p>Audio #</p>
				</div>
				<div className="col-3 d-flex justify-content-end">
					<div className="row">
						<div className="pl-2">
							<MaterialIcon icon="star" size="tiny" color="#fff"/>
						</div>
						<div className="pl-2">
							<MaterialIcon icon="delete" size="tiny" color="#fff"/>
						</div>
					</div>
				</div>
			</div>
			<hr style={{backgroundColor:"#f1f1f1"}} />
		</div>
	)
	
}

export default TLBodyControls