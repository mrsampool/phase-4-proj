import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'
import CustomerNameEdit from './CustomerNameEdit'

const Punchcard = () => {

  const [editFlag, setEditFlag ] = useState(false)
  const [editNameFlag, setEditNameFlag] = useState(false)
  
  const { user, allCustomers, deletePunchcard, editPunchCount, userPunchcards, loggedIn} = useContext(UserContext)

  const { customer_id, id } = useParams()

  console.log(userPunchcards)
 
  const punchcard = userPunchcards.find(p => p.id)


  console.log('punch',punchcard)

  const handlePunch = (e) => {
    e.preventDefault()

    editPunchCount({
            id: id,
            count: punchcard.count - 1,
    })
  }

if (loggedIn) {
  return (
    <>
      <main class="container">
        <article className="card">

            {/* <header >
              <h1>{username}</h1>
            </header>
           
            <h3>{reward}</h3>
            <h2>{count} more!</h2>  */}
           
            <footer>
     
            </footer>

        </article>

        <article className="card">
        Settings
        <br/><br/>

          {/* {editNameFlag ? 
                <CustomerNameEdit key={customer.id} id={customer.id} setNameFlag={setEditNameFlag} /> 
                :
                <button className="button1" onClick={() => setEditNameFlag(true)}>Edit Name</button>
            }  */}
            
            <br />

          {editFlag ? 
                <PunchcardEdit editFlag={setEditFlag} /> 
                :
                <button className="button1" onClick={() => setEditFlag(true)}>Edit Punchcard</button>
            }

          <br />
            {/* <button  className="button1" onClick={() => deletePunchcard(customer.id)}>Delete</button> */}
        </article>
        
      </main>
    </>
  )
  } else {
  
    return (<div>Punchcard not found.</div>)
  
}
}

export default Punchcard