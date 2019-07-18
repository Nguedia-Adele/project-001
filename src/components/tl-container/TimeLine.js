import React from 'react'
import TLHeader from './tl-header/TLHeader'
import TLBody from './tl-body/TLBody'
function TimeLine(){
	return(
		<div className="text-white" style={{backgroundColor:"#2b2b2b"}} >
			<TLHeader/>
			<hr style={{backgroundColor:"#f1f1f1", marginTop:"5px"}}/>
			<TLBody/>
		</div>
	)
}

export default TimeLine