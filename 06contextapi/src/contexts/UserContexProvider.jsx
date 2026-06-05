import React, { useState } from 'react'
import UserContext from './UserContext'

// function UserContexProvider() {
//   return (
//     // <div>UserContexProvider</div>
//   )
// }
// children jo aa rhe use as it is rkh do bs wrap krdo use context se
const UserContexProvider= ({children}) =>{
    const [user,setuser]=useState('')
  return(
    <UserContext.Provider value={{user,setuser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContexProvider ;