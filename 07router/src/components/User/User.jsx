import React from 'react'
import {useParams} from 'react-router-dom'

function User () {
    const {userid}=useParams()
  return (
    <div className='text-white bg-gray-600 text-2xl'>User :{userid}</div>


  )
}

export default User