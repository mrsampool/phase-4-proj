import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import PunchcardForm from './PunchcardForm'
import PunchcardPreview from './PunchcardPreview'

const Punchcards = () => {

    const { punchcards, loggedIn } = useContext(UserContext)
    const [formFlag, setFormFlag ] = useState(false)

    const addPunchcardFlag = () => {
      setFormFlag(false)
    }

    if (loggedIn) {

        const punchcardsList = punchcards.map((p) => 
          <PunchcardPreview
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