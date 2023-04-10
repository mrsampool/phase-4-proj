import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import { UserContext } from './context/user'

const CreateNew = () => {

  const { user, formFlag } = useContext(UserContext)

  return (
    <div>
            {formFlag ? 
            <CustomerForm key={user.customers.id} /> 
            :
            <PunchcardForm key={user.punchcards.id}/> 
            }
    </div>
  )
}

export default CreateNew