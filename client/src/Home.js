import React, { useContext } from 'react'
import { UserContext } from './context/user'

const Home = () => {

  const { user, loggedIn } = useContext(UserContext)

  if (loggedIn && user) {
    return ( 
      <div>
        <h3>{user.username}'s Home </h3>
      </div>
    )
  } else { 
     return (<h3>Please login or Signup</h3>)
  }
}

export default Home