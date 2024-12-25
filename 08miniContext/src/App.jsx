import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import UserContext from './Context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
 
  return (
    <div>
      <UserContextProvider>
        <h1>React with Chai</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
} 

export default App
