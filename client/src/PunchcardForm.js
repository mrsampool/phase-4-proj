import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const PunchcardForm = () => {

    const [name, setName] = useState("")
    const [kind, setKind] = useState("")
    const [count, setCount] = useState(0)
    // const [reward, setReward] = useState(0)

    const {addPunchcard} = useContext(UserContext)

    // POST REQUEST TO CREATE
    const handleSubmit = (e) => {
        e.preventDefault()

        addPunchcard({
                name: name,
                kind: kind,
                count: count,
                // reward: punchcard.reward
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input 
                type="text" 
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />


            <label>Kind:</label>
            <input 
                type="text" 
                id="kind"  
                value={kind}
                onChange={e => setKind(e.target.value)}
            />

            <label>Count:</label>
            <input 
                type="integer" 
                id="count" 
                value={count}
                onChange={e => setCount(e.target.value)}
            />

            {/* <label>Reward:</label>
            <input 
                type="" 
                id="count" 
                value={reward}
                onChange={e => setReward(e.target.value)}
            /> */}
   

        <input type="submit" />
        </form>
    </div>
  )
}

export default PunchcardForm

