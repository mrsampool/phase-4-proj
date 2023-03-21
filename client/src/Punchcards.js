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
        <>
        <main class="container">
        
            <h1>MY PUNCHCARDS</h1>
            <div class="grid">
            {punchcardsList}
            </div>
            <br/>
            
            {formFlag ? 
            <PunchcardForm key={punchcards.id} addPunchcardFlag={addPunchcardFlag} /> 
            :
            <button onClick={() => setFormFlag(true)}>Add Punchcard</button>}

        </main>
        </>
      )
    } else {
      return (
        <h3>Not Authorized -- Please signup or login</h3>
      )
    }
}

export default Punchcards