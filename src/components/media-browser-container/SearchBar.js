import React from 'react'
import MaterialIcon from 'material-icons-react'

import './styles/searchbar.css'

function SearchBar(){
	return(
		<div className="row border rounded mx-2 pt-1 bg-light">
			<div className="col-8">
				<div className="row">
					<span className="px-2 my-1">
						<MaterialIcon icon="search" size="small"/>
					</span>

					<div className="pb-1">
						<input
							type="text"
							className="form-control border-0 bg-light"
							placeholder="search"/>
		      		</div>
	      		</div>
      		</div>

      		<div className="col-4 d-flex justify-content-end">
      			<div className="row my-1">
      				<div className="vl"></div>

					<div className="mx-2">
						<div className="dropdown">
							<a
								className="dropbtn dropdown-toggle"
								type="button"
								href="https://www.w3schools.com/"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
									All
							</a>
							<div className="dropdown-content" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="https://www.w3schools.com/">Action1</a>
								<a className="dropdown-item" href="https://www.w3schools.com/">Action2</a>
								<a className="dropdown-item" href="https://www.w3schools.com/">Action3</a>
							</div>
						</div>
					</div>

					<span className="px-2">
						<MaterialIcon icon="tune" size="small"/>
					</span>

		      		<div className="vl"></div>

					<div className="mx-2">
						<div className="dropdown">
							<a
								className="dropbtn dropdown-toggle"
								type="button"
								href="https://www.w3schools.com/"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
									All
							</a>
							<div className="dropdown-content" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="https://www.w3schools.com/">Action1</a>
								<a className="dropdown-item" href="https://www.w3schools.com/">Action2</a>
								<a className="dropdown-item" href="https://www.w3schools.com/">Action3</a>
							</div>
						</div>
					</div>

					<span className="px-2">
						<MaterialIcon icon="favorite_border" size="small" color="#f50000" />
					</span>
				</div>
			</div>
		</div>
	)
}

export default SearchBar