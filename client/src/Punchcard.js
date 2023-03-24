import React, { useState, useContext} from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'
// import RewardCount from './RewardCount'

// component for when you OPEN a PuncardItem card

const Punchcard = () => {

  // const [punchcard, setPunchcard] = useState([])
  const [punchCount, setPunchCount] = useState("")
  const [editFlag, setEditFlag ] = useState(false)
  const { punchcards, deletePunchcard } = useContext(UserContext)
  
  const { id } = useParams()

  const punchcard = punchcards.find(p => p.id === parseInt(id))


  const editPunchCount = () => {
    fetch(`/punchcards/${punchcard.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(

        )
    })
    .then(resp => resp.json())
    .then((data) => handleEditedPunchCount(data))
}

const handleEditedPunchCount = (editedPunchCount) => {
    const updatedPunchCount = punchcards.map((p) => {
     if (p.id === editedPunchCount.id) {
       return editedPunchCount;
     }
     return punchcards
   })
   setPunchCount(updatedPunchCount);
 }


  if (!punchcard) {
    return <div>Punchcard not found.</div>
  }
  
  return (
    <div>
      <main class="container">
        <article>
        <header>
      <h2><em>{punchcard.name}</em></h2>
      </header>

      <h1>{punchcard.reward}</h1>


      <h1>{punchcard.count} more punches to go!</h1> 

    <button onClick={editPunchCount}>PUNCH IT!</button>

    <hr /> 
    <br /><br /><br />
      
      {editFlag ? 
          <PunchcardEdit editFlag={setEditFlag} /> 
          :
          <button onClick={() => setEditFlag(true)}>Edit Punchcard</button>
      }

       <button onClick={() => deletePunchcard(id)}>Delete</button>
       </article>
       </main>
    </div>
  )
}

export default Punchcard