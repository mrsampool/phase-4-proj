import React, { useContext } from 'react'
import { UserContext } from './context/user'

const Home = () => {

  const { loggedIn } = useContext(UserContext)

  if (loggedIn) {
    return ( 
      <div>
        <h3>Welcome </h3>
      </div>
    )
  } else { 
     return (<h3>Please login or Signup!</h3>)
  }
}

export default Home