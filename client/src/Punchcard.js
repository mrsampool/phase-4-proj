import React, { useState, useContext} from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'

// component for when you OPEN a PuncardItem card

const Punchcard = () => {

  // const [punchcard, setPunchcard] = useState([])
  const [editFlag, setEditFlag ] = useState(false)
  const { punchcards, deletePunchcard } = useContext(UserContext)
  
  const { id } = useParams()

  const punchcard = punchcards.find(p => p.id === parseInt(id))

  if (!punchcard) {
    return <div>Punchcard not found.</div>
  }
  
  return (
    <div>
       {punchcard.name}
       <br />
       {punchcard.kind}
       <br />
       {punchcard.count}
       <br />
       {punchcard.reward}

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