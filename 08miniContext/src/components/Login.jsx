import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPAssword]=useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit=()=>{
        e.preventDefault()
        setUser({username,password})

    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        <input type="password" 
        value={password}
        onChange={(e)=>setPAssword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login