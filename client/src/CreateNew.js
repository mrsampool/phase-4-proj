import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import { UserContext } from './context/user'

const CreateNew = () => {

  const [customerFlag, setCustomerFlag ] = useState(true)
  const [punchFlag, setPunchFlag ] = useState(false)

  const { punchcards, customers, errors } = useContext(UserContext)

  console.log("outside the funk", errors)

  const handleFormSwitch = () => {
   
    if (errors) {
      console.log("inside the funk", errors)
      setCustomerFlag(false)
    } else {
      console.log("there must be errors", errors)
    }

  }

  return (
    <div>

               
        {customerFlag ? 
            <CustomerForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
            :
            <PunchcardForm key={punchcards.id} handleFormSwitch={handleFormSwitch}  />
        }  

        {/* {punchFlag ? 
            <PunchcardForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
            :
            null
        }   */}
        
    </div>
  )
}

export default CreateNew