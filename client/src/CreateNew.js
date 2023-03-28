import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import { UserContext } from './context/user'

const CreateNew = () => {

  const [formFlag, setFormFlag ] = useState(true)

  const { punchcards, customers } = useContext(UserContext)

  const addPunchcardFlag = () => {
    setFormFlag(true)
  }

  const addCustomerFlag = () => {
    setFormFlag(false)
  }

  return (
    <div>
        
        {/* what would be good Ids for the below keys? */}
        {formFlag ? 
            <CustomerForm key={customers.id} addCustomerFlag={addCustomerFlag} /> 
            :
            <PunchcardForm key={punchcards.id} addPunchcardFlag={addPunchcardFlag} />
        }  


    </div>
  )
}

export default CreateNew