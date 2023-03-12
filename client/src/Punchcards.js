import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
import PunchcardForm from './PunchcardForm'
import { NavLink, useNavigate } from 'react-router-dom'


const Punchcards = () => {

    const { punchcards, loggedIn } = useContext(UserContext)

    console.log(punchcards)

    const [formFlag, setFormFlag ] = useState(false)
    const params = useParams()

    const addPunchcardFlag = () => {
      setFormFlag(false)
    }

    if (loggedIn) {
      const punchcardsList = punchcards.map( p => <li>{p.name}</li>)
      return (
        <div>
            <h3>My Punchcards:</h3>
            <h3>{punchcardsList}</h3>
            <br/>
            {formFlag ? 
            <PunchcardForm addPunchcardFlag={addPunchcardFlag} /> 
            :
            <button onClick={() => setFormFlag(true)}>Add Punchcard</button>}


        </div>
      )
    } else {
      return (
        <h3>Not Authorized -- Please signup or login</h3>
      )
    }

  
}

export default Punchcards