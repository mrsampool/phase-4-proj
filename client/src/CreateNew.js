import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import { UserContext } from './context/user'

const CreateNew = () => {


  const { customers, punchcards, formFlag } = useContext(UserContext)


  return (
    <div>

            {formFlag ? 
            <CustomerForm key={customers.id} /> 
            :
            <PunchcardForm key={punchcards.id}/> 
            }
      
    </div>
  )
}

export default CreateNew