import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'

const PunchcardForm = ({addPunchcardFlag}) => {

    const [name, setName] = useState("")
    const [kind, setKind] = useState("")
    const [count, setCount] = useState(10)
    const [reward, setReward] = useState("")

    const navigate = useNavigate()

    const { addPunchcard, newId } = useContext(UserContext)

    const handlePunchcardSubmit = (e) => {
        e.preventDefault()

        addPunchcard({
                name: name,
                kind: kind,
                count: count,
                reward: reward,
                customer_id: newId
        })
        addPunchcardFlag()
    }

  return (
    <div>
        <main class="container">
            <form onSubmit={handlePunchcardSubmit}>
                <article>
                    <p><em>Step 2 of 2</em></p>
                    <p><strong>Create a punchcard!</strong></p>
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

                </article>
                    <input type="submit" />
            </form>
  
        </main>
        <hr/>
    </div>
  )
}

export default PunchcardForm

