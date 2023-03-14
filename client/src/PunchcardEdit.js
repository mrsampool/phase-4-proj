import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'

const PunchcardEdit = ({editFlag}) => {

  const {editPunchcard} = useContext(UserContext)

  const [name, setName] = useState("")
  const [kind, setKind] = useState("")
  const [count, setCount] = useState(null)
  const [reward, setReward] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()

    editPunchcard({
            name: name,
            kind: kind,
            count: count,
            reward: reward
    })
    editFlag()
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
            <br/><br/>

            <label>Kind:</label>
            <input 
                type="text" 
                id="kind"  
                value={kind}
                onChange={e => setKind(e.target.value)}
            />
            <br/><br/>

            <label>Count:</label>
            <input 
                type="integer" 
                id="count" 
                value={count}
                onChange={e => setCount(e.target.value)}
            />
            <br/><br/>

            <label>Reward:</label>
            <input 
                type="" 
                id="count" 
                value={reward}
                onChange={e => setReward(e.target.value)}
            />
            <br/><br/>
   
        <input type="submit" />
        </form>
    </div>
  )
}

export default PunchcardEdit