import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
import { NavLink, useNavigate } from 'react-router-dom'


const Punchcards = () => {

    const { punchcards, loggedIn } = useContext(UserContext)

    const [formFlag, setFormFlag ] = useState(false)
    const params = useParams()

    if (loggedIn) {
      const punchcardsList = punchcards.map( p => <li>{p.name}</li>)
      return (
        <div>
            <h3>[My Punchcards]</h3>
            <h3>{punchcardsList}</h3>
        </div>
      )
    } else {
      return (
        <h3>Not Authorized -- Please signup or login</h3>
      )
    }

  
}

export default Punchcards