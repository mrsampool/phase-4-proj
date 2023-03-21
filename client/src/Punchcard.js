import React, { useState, useContext} from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'
// import RewardCount from './RewardCount'

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
      <main class="container">
        <article>

     
      <header>
      <h2><em>{punchcard.name}</em></h2>
      </header>
      <body>
      <h1>{punchcard.count}</h1> 
      <h3>more punches needed until</h3>
      </body>
      <h1>{punchcard.reward}!</h1>
      
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