import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import PunchcardEdit from './PunchcardEdit'

// component for when you OPEN a PuncardItem card

const Punchcard = ({punchcard}) => {

  const [editFlag, setEditFlag ] = useState(false)

const { deletePunchcard, fetchPunchcard } = useContext(UserContext)

fetchPunchcard(punchcard.id)

  return (
    <div>
      Hi
      {punchcard.reward}
      
        <button onClick={deletePunchcard}>delete</button>

        {editFlag ? 
          <PunchcardEdit editFlag={setEditFlag} /> 
          :
          <button onClick={() => setEditFlag(true)}>Edit Punchcard</button>}

    </div>
  )
}

export default Punchcard