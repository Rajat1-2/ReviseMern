import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid}=useParams()
  return (
    <>
    <h1 className=' ml-[670px] m-4 text-3xl bg-amber-600 text-white rounded-4xl p-4 flex justify-center w-[200px]'>User : {userid}</h1>
    </>
  )
}

export default User