import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'

// component for when you OPEN a PuncardItem card

const Punchcard = () => {

  const [editFlag, setEditFlag ] = useState(false)
  const { id } = useParams()
  const { deletePunchcard } = useContext(UserContext)

  return (
    <div>
      hi 
    

      <br />
      {editFlag ? 
          <PunchcardEdit editFlag={setEditFlag} /> 
          :
          <button onClick={() => setEditFlag(true)}>Edit Punchcard</button>
      }
        <br />

       <button onClick={() => deletePunchcard(id)}>Delete</button>

    </div>
  )
}

export default Punchcard