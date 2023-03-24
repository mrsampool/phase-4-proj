import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const PunchcardForm = ({addPunchcardFlag}) => {

    const [name, setName] = useState("")
    const [kind, setKind] = useState("")
    const [count, setCount] = useState(10)
    const [reward, setReward] = useState("")

    const { addPunchcard, newId } = useContext(UserContext)

    // POST REQUEST TO CREATE


    const handlePunchcardSubmit = (e) => {
        e.preventDefault()

        addPunchcard({
                name: name,
                kind: kind,
                count: count,
                reward: reward,
                customer_id: newId
        })
        // addPunchcardFlag()
    }

  return (
    <div>
        <h3><em>Create a New Punchcard</em></h3>
        <main class="container">

        <form onSubmit={handlePunchcardSubmit}>
            
            <br/><br/>
            <article>

            <label>Business Name:</label>
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
            <br/><br/>

            <label>Punches required:</label>
            <input 
                type="integer" 
                id="count" 
                value={count}
                onChange={e => setCount(e.target.value)}
            />
            <br/><br/>

            <label>Reward:</label>
            <input 
                type="text" 
                id="count" 
                value={reward}
                onChange={e => setReward(e.target.value)}
            />
            <br/><br/>
            </article>
        <input type="submit" />
        </form>
  
        </main>
        <hr/>
    </div>
  )
}

export default PunchcardForm

