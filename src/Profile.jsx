import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((state) => state.user)

  if (!user.name) return <h1>Enter login details</h1>

  return (
    <div>
      <h1>Profile Info</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  )
}

export default Profile
