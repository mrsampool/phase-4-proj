import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
import PunchcardForm from './PunchcardForm'
import PunchcardItem from './PunchcardItem'
import { NavLink, useNavigate } from 'react-router-dom'


const Punchcards = () => {

    const { punchcards, loggedIn } = useContext(UserContext)

    const [formFlag, setFormFlag ] = useState(false)
    const params = useParams()

    const addPunchcardFlag = () => {
      setFormFlag(false)
    }

    if (loggedIn) {

      const punchcardsList = punchcards.map((p) => 
          <PunchcardItem 
            key={p.id} 
            punchcard={p} />
        )

      return (
        <div>
            <h3>My Punchcards:</h3>
            <h3>{punchcardsList}</h3>
            <br/>
            {formFlag ? 
            <PunchcardForm key={punchcards.id} addPunchcardFlag={addPunchcardFlag} /> 
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