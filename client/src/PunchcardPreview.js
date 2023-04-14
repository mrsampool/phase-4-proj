import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const PunchcardPreview = ({punchcard}) => {

  const { allCustomers, user, editPunchCount } = useContext(UserContext)

  //if params, which is the customer's id, equals the punchard's customer_id foreign key. THEN show the user's username. If not show "this punchcard does not belong to user's username! "

  //we have access to the punchcard. 

  const userName = allCustomers.map(u => u.users).flat().find(u => u.id === punchcard.user_id)

  const displayName = userName.id === punchcard.user_id ? <h3>Punchard for <br/> <em> {userName.username} </em></h3> : <h3>This punchcard does not belong to you. </h3>




 

  const handlePunch = (e) => {
    e.preventDefault()

    editPunchCount({
            id: punchcard.id,
            count: punchcard.count - 1,
    })
  }

  return (
    <>
    <article>
      <header>
      <em>{punchcard.name}</em>

      {displayName}

      </header>
  
      <h3>{punchcard.count} more to go</h3>

      <p>{punchcard.reward}!</p>
      <footer>
     
             <button className="punch-button" 
              onClick={handlePunch}>
                PUNCH IT!</button>

      </footer>
    </article>
    </>
  )
}

export default PunchcardPreview