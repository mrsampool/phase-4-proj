import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const PunchcardForm = () => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [count, setCount] = useState(0)
    // const [reward, setReward] = useState(0)

    const {addPunchcard} = useContext(UserContext)

    // POST REQUEST TO CREATE
    const handleSubmit = (e) => {
        e.preventDefault()

        addPunchcard({
                name: name,
                type: type,
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


            <label>Type:</label>
            <input 
                type="text" 
                id="type"  
                value={type}
                onChange={e => setType(e.target.value)}
            />

            <label>Count:</label>
            <input 
                type="" 
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

