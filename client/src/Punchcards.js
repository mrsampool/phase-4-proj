import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import PunchcardForm from './PunchcardForm'
import CustomerForm from './CustomerForm'
import PunchcardPreview from './PunchcardPreview'

const Punchcards = () => {

    const { punchcards, loggedIn, customers } = useContext(UserContext)
    const [formFlag, setFormFlag ] = useState(false)

    const addPunchcardFlag = () => {
      setFormFlag(false)
    }

    if (loggedIn) {

      const punchcardsList = punchcards.map((p) => 
         
            <PunchcardPreview
              key={p.id} 
              punchcard={p} />
        
      )
      
      return (
        <>
        <main class="container">
            <hr />
            <br /><br />

          <CustomerForm 
            key={customers.id} 
            // addCustomerFlag={addCustomerFlag} 
            /> 
          <PunchcardForm 
            key={punchcards.id} 
            // addPunchcardFlag={addPunchcardFlag} 
            /> 
         {/* {formFlag ? 
            <PunchcardForm key={punchcards.id} addPunchcardFlag={addPunchcardFlag} /> 
            :
            <button onClick={() => setFormFlag(true)}>Create New</button>} */}

            <br /><br />
            <hr />
            <br /><br />
            <h1>Active Punchcards</h1>
            <div class="grid">
            {punchcardsList}
            </div>
            <br/>
            
            
        </main>
        </>
      )
    } else {
      return (
        <h3>Not Authorized -- Please signup or login</h3>
      )
    }
}

export default Punchcards