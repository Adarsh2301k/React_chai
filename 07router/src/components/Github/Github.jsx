import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/adarsh2301k')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-center text-3xl m-4 p-5 bg-gray-600 text-white'>Github ID : { data.login}
    <img className='' src={data.avatar_url}  alt="GitPic" width={300}  />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/adarsh2301k')
    return response.json()
}