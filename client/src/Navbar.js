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
          <nav class="container-fluid">
            
          <ul>
          <li>
            <button class="outline" onClick={logoutUser}>Logout</button>
          </li>  
          <br/><br/>

          <li>
          <NavLink to='/customers'>
            <button>Clientele</button>
          </NavLink>
          </li>

          <li>
          <NavLink to='/punchcards'>
            <button>New</button>
          </NavLink>
          </li>

          </ul>
          <hr/>

          <ul>
              <h2>{user.username}</h2>
          </ul>

          </nav>

          

        </>
      )

  } else {

    return (
      <div>
        <nav class="container-fluid">
        <NavLink to='/login'>
          <button class="contrast outline">Login</button>
        </NavLink>

        <NavLink to='/signup'>
          <button>Signup</button>
        </NavLink>

        <hr/>
        </nav>
      </div>
    )
  }
}

export default Navbar