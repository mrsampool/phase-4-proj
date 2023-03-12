import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {user, logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then(() => { 
      logout() 
      navigate('/')
    })
  }

  // return must only happen if someone is logged in AND the user is not NULL (got a 'null' error before; this fixed it)

  if (loggedIn) {
   
      return (
        <>

          <h3>{user.username}</h3>
          <button onClick={logoutUser}>Logout</button>
          <br/><br/>

          <NavLink to='/punchcards'>
          <button>My Punchcards</button>
        </NavLink>

          <hr/>

        </>
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