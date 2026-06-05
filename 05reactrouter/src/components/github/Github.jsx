import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data=useLoaderData();
    
    // const [data,setdata]=useState([]);

//     {
//   "login": "Rajat1-2",
//   "avatar_url": "https://avatars.githubusercontent.com/u/...",
//   "name": "Rajat",
//   "public_repos": 20,
//   "followers": 100,
//   "following": 50,
//   "bio": "Full Stack Developer",
//   "location": "India"
// }
    

    // useEffect(()=>{
    //  fetch(`https://api.github.com/users/Rajat1-2`)
	// 			.then(response => response.json())
	// 			.then(data => {
    //                 setdata(data)
    //             });
    // },
    // []);
  return (
    <>
    <h1 className=' ml-[670px] m-4 text-3xl bg-amber-600 text-white rounded-4xl p-4 flex justify-center w-[200px]'> {data.name} : {data.followers}</h1>
    <img
    src={data.avatar_url}
    alt='my github image'
     ></img>
    </>
  )
}

export default Github

export const githubinfolaoder=async()=>{
       const response=await  fetch(`https://api.github.com/users/Rajat1-2`);
       return response.json()

}