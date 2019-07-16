import React from 'react'
import MaterialIcon from 'material-icons-react'

function Header(){
	return(
		<div className="bg-dark"> 
			<ul className="nav nav-tabs">
				<li className="nav-item mx-2">
					<li className="nav-link active">
						<MaterialIcon icon="star" size="small"/>
					</li>
				{/*replace li elements surrounding icons with anchor tags and add href*/}
				</li>

				<li className="nav-item mx-2">
					<li className="nav-link">
						<MaterialIcon icon="video_library" size="small" color="#fff"/>
					</li>
				</li>

				<li className="nav-item mx-2">
					<li className="nav-link">
						<MaterialIcon icon="collections" size="small" color="#fff"/>
					</li>
				</li>

				<li className="nav-item mx-2">
					<li className="nav-link disabled">
						<MaterialIcon icon="filter" size="small" color="#fff"/>
					</li>
				</li>
			</ul>
		</div>
	)
}

export default Header