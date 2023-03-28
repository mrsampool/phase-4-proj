import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'

const Punchcard = () => {

  const [editFlag, setEditFlag ] = useState(false)
  
  const { punchcards, deletePunchcard, editPunchCount } = useContext(UserContext)
  const { id } = useParams()

  const punchcard = punchcards.find(p => p.id === parseInt(id))

  if (!punchcard) {
    return <div>Punchcard not found.</div>
  }

  const handlePunch = (e) => {
    e.preventDefault()

    editPunchCount({
            id: id,
            count: punchcard.count - 1,
    })
  }
  
  return (
    <>
      <main class="container">
        <article>
          <header>
            <h2><em>{punchcard.name}</em></h2>
          </header>

            <h1>{punchcard.reward}</h1>
            <h1>{punchcard.count} more to go!</h1> 

            <button onClick={handlePunch}>PUNCH IT!</button>

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
    </>
  )
}

export default Punchcard