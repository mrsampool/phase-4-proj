import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import { UserContext } from './context/user'

const CreateNew = () => {

  const [customerFlag, setCustomerFlag ] = useState(true)
  const [punchFlag, setPunchFlag ] = useState(false)

  const { punchcards, customers } = useContext(UserContext)


  const handleFormSwitch = () => {
    console.log("hi")
    setCustomerFlag(false)
    // setPunchFlag(true)
  }

  return (
    <div>

  <CustomerForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
  <PunchcardForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
               
        {/* {customerFlag ? 
            <CustomerForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
            :
            null
        }  

        {punchFlag ? 
            <CustomerForm key={customers.id} handleFormSwitch={handleFormSwitch}  /> 
            :
            null
        }   */}
        


    </div>
  )
}

export default CreateNew