import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import PunchcardPreview from './PunchcardPreview'
import CreateNew from './CreateNew'

const Punchcards = () => {

    const { punchcards, loggedIn} = useContext(UserContext)
    const [toggleNew, setToggleNew] = useState(false)

    const handleNewClick = () => {
      setToggleNew(!toggleNew)
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

        <button onClick={handleNewClick}>NEW PUNCHCARD</button>

        {toggleNew ? <CreateNew /> : null}

        {/* {formFlag ? 
            <CustomerForm key={customers.id} addCustomerFlag={addCustomerFlag} /> 
            :
            <PunchcardForm key={punchcards.id} addPunchcardFlag={addPunchcardFlag} />
        }    */}
            <hr />
            <br />
            {/* <h2>Active Punchcards</h2>
            <div class="grid">
            {punchcardsList}
            </div> */}
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