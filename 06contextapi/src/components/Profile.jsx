import React, { useState , useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
   const {user}=useContext(UserContext); 
  if(!user) return <div>please login</div>
  else{
    return(
      <div >
			
			Welcome {user.uname}
			{/* Welcome {user}
    console.log({user}) */}
		</div>
    )
		
  }
}

export default Profile