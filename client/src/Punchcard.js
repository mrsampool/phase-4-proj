import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'

const Punchcard = () => {

  const [editFlag, setEditFlag ] = useState(false)
  
  const { punchcards, deletePunchcard, editPunchCount, customers, user } = useContext(UserContext)
  const { id } = useParams()


  const punchcard = punchcards.find(p => p.id === parseInt(id))
  const customer = customers.find(c => c.id === punchcard.customer_id)

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
        <article className="card">
            <header >
              <h1>{customer.username}</h1>
            </header>
           
            <h3>{punchcard.reward}</h3>
            <h2>{punchcard.count} more!</h2> 
           
            <footer>
            <button className="punch-button" onClick={handlePunch}>PUNCH IT!</button>
            </footer>

        </article>

        <article className="card">
            {editFlag ? 
                <PunchcardEdit editFlag={setEditFlag} /> 
                :
                <button className="button1" onClick={() => setEditFlag(true)}>Edit Punchcard</button>
            }
          <br />
            <button  className="button1" onClick={() => deletePunchcard(id)}>Delete</button>
        </article>
        
      </main>
    </>
  )
}

export default Punchcard