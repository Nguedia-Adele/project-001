import React from 'react'
import MaterialIcon from 'material-icons-react'

function Header(){
	return(
		<div className="bg-dark"> 
			<ul className="nav nav-tabs">
				<li className="nav-item mx-2">
					<a className="nav-link active" href="https://www.w3schools.com/">
						<MaterialIcon icon="star" size="small"/>
					</a>
				</li>

				<li className="nav-item mx-2">
					<a className="nav-link" href="https://www.w3schools.com/">
						<MaterialIcon icon="video_library" size="small" color="#f8f9fa"/>
					</a>
				</li>

				<li className="nav-item mx-2">
					<a className="nav-link" href="https://www.w3schools.com/">
						<MaterialIcon icon="collections" size="small" color="#f8f9fa"/>
					</a>
				</li>

				<li className="nav-item mx-2">
					<a className="nav-link" href="https://www.w3schools.com/">
						<MaterialIcon icon="filter" size="small" color="#f8f9fa"/>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Header