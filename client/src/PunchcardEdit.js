import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'

const PunchcardEdit = ({editFlag}) => {

    const [name, setName] = useState("")
    const [kind, setKind] = useState("")
    const [count, setCount] = useState("")
    const [reward, setReward] = useState("")

    const {punchcards, editPunchcard} = useContext(UserContext)
    const { id } = useParams()

    const punchcard = punchcards.find(p => p.id === parseInt(id))

    const handleSubmit = (e) => {
        e.preventDefault()

        editPunchcard({
                id: id,
                name: name,
                kind: kind,
                count: count,
                reward: reward
        })
        editFlag()
    }

  return (
    <div>
        <hr />
        <p>Edit your card:</p>
        <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input 
                type="text" 
                id="name"
                value={name}
                placeholder={punchcard.name}
                onChange={e => setName(e.target.value)}
            />
            <br/><br/>

            <label>Kind:</label>
            <input 
                type="text" 
                id="kind"  
                value={kind}
                placeholder={punchcard.kind}
                onChange={e => setKind(e.target.value)}
            />
            <br/><br/>

            <label>Count:</label>
            <input 
                type="integer" 
                id="count" 
                value={count}
                placeholder={punchcard.count}
                onChange={e => setCount(e.target.value)}
            />
            <br/><br/>

            <label>Reward:</label>
            <input 
                type="" 
                id="count" 
                value={reward}
                placeholder={punchcard.reward}
                onChange={e => setReward(e.target.value)}
            />
            <br/><br/>
   
        <input type="submit" />
        </form>
    </div>
  )
}

export default PunchcardEdit