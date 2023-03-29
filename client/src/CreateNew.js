import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import { UserContext } from './context/user'

const CreateNew = () => {

  const [customerFlag, setCustomerFlag ] = useState(true)
  const [punchFlag, setPunchFlag ] = useState(false)

  const { punchcards, customers, errors } = useContext(UserContext)

 
  const handleFormSwitch = (errors) => {
   
    if (errors.length < 1) {
      setCustomerFlag(true)
    } else {
      setCustomerFlag(false)
      setPunchFlag(true)
    }

  }

  return (
    <div>

               
        {customerFlag ? 
        {customerFlag ? 
            <CustomerForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
            :
            <PunchcardForm key={punchcards.id} handleFormSwitch={handleFormSwitch}  />
            <PunchcardForm key={punchcards.id} handleFormSwitch={handleFormSwitch}  />
        }  

        {punchFlag ? 
            <CustomerForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
            :
            null
        }   
        


    </div>
  )
}

export default CreateNew