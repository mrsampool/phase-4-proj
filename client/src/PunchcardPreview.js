import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const PunchcardPreview = ({punchcard}) => {

  const { allCustomers, user, editPunchCount } = useContext(UserContext)

  const userName = allCustomers.map(u => u.users).flat().find(u => u.id === punchcard.user_id)

  const displayName = userName?.id === punchcard.user_id ? <h3>Punchard for <br/> <em> {userName.username} </em></h3> : <h3>This punchcard does not belong to you. </h3>
 

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

      {userName?.username}

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