import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'
import CustomerNameEdit from './CustomerNameEdit'

const Punchcard = () => {

  

  const [editFlag, setEditFlag ] = useState(false)
  const [editNameFlag, setEditNameFlag] = useState(false)
  
  const { user, deletePunchcard, editPunchCount} = useContext(UserContext)

  const { customer_id, id } = useParams()

   const punchcard = user.punchcards && user.punchcards.length > 0
  ? user.punchcards.find(p => p.id === parseInt(id))
  : null

  // const punchcard = user?.punchcards?.find(p => p.id === parseInt(id))

  const customer = user.customers && user.customers.length > 0 ? user.customers.find(c => c.id === parseInt(customer_id)) : null

  console.log('user', punchcard)
  console.log('allcust', customer)

  // if (!punchcard) {
  //   return <div>Punchcard not found.</div>
  // }

  const handlePunch = (e) => {
    e.preventDefault()

    editPunchCount({
            id: id,
            count: punchcard.count - 1,
    })
  }

if (punchcard) {
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
        Settings
        <br/><br/>

          {editNameFlag ? 
                <CustomerNameEdit key={customer.id} id={customer.id} setNameFlag={setEditNameFlag} /> 
                :
                <button className="button1" onClick={() => setEditNameFlag(true)}>Edit Name</button>
            } 
            
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