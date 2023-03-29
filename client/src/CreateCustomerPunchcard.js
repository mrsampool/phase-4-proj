import React, { useState, useContext } from 'react'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import { UserContext } from './context/user'

const CreateCustomerPunchcard = () => {

  const [customerFlag, setCustomerFlag ] = useState(true)
  const [punchCardFlag, setPunchcardFlag ] = useState(true)

  const { punchcards, customers } = useContext(UserContext)

  // const addPunchcardFlag = () => {
  //   setFormFlag(true)
  // }

  const handleFormSwitch = () => {
    setCustomerFlag(false)
  }

  return (
    <div>
        

        {customerFlag ? 
            <CustomerForm handleFormSwitch={handleFormSwitch}  /> 
            :
            null
        }  
        


    </div>
  )
}

export default CreateCustomerPunchcard