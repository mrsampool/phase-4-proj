import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'
import PunchcardItem from './PunchcardItem'

// component for when you OPEN a PuncardItem card

const Punchcard = () => {

  const [editFlag, setEditFlag ] = useState(false)
  const { punchcards, deletePunchcard } = useContext(UserContext)
  const { id } = useParams()

//   const punchcardsList = punchcards.map((p) => 
 
// )

  return (
    <div>
       <PunchcardItem key={id} punchcard={punchcards} />
    

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