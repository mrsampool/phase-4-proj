import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const {user, logout} = useContext(UserContext)

  const logoutUser = () => {

    fetch('/logout', {
      method: 'DELETE',
    })
    .then(() => { logout() })
    
  }

  // return must only happen if someone is logged in

  if (user) {
   
      return (
        <div>
          <h1>Hello {user.username}</h1>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )
  } else {

    return (
      <div>
        <NavLink to='/login'>
          <button>Login</button>
        </NavLink>
        <NavLink to='/signup'>
          <button>Signup</button>
        </NavLink>
        <hr/>
      </div>
    )
  }
}

export default Navbar