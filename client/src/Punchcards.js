import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'


const Punchcards = () => {
    const {} = useContext(UserContext)
    const [formFlag, setFormFlag ] = useState(false)
    const params = useParams()

    // GET request to receive punchcards

  return (
    <div>
        <h3>Punchcards</h3>
    </div>
  )
}

export default Punchcards