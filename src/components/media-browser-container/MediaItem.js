import React from "react"
import MaterialIcon from "material-icons-react"

import './styles/mediastyles.css'

function MediaItem(props){
	console.log(props)
	return(
		<div className="m-2">
			<div className="card border-dark media-item">
				<img className="card-img clearfix" src={props.image} alt={props.alternative}/>
				<div className="card-img-overlay">
					<div className="row mt-n3">
						<div className="col-8">
							<span className="ml-n3">
								<MaterialIcon icon="stars" size="small" color="#000"/>
							</span>
						</div>
						<div className="col-4 duration"><p className="small bg-black py-1 rounded">{props.timestamp}</p></div>
					</div>
					<div className="bg-black bg-opaque bottom text-center w-100">
						<p className="small">{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MediaItem