import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import PunchcardPreview from './PunchcardPreview'
import CreateNew from './CreateNew'

const Punchcards = () => {

    const { loggedIn} = useContext(UserContext)
    const [toggleNew, setToggleNew] = useState(false)

    const handleNewClick = () => {
      setToggleNew(true)
    }
  
    if (loggedIn) {
      
      return (
        <>
        {/* <h1 className="title">CREATE</h1> */}
        <main class="container">
        <br />
        <button className="button1" onClick={handleNewClick}>NEW PUNCHCARD</button>

        {toggleNew ? <CreateNew /> : null}

                     
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