import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'

const PunchcardForm = ({addPunchcardFlag}) => {

    // const [name, setName] = useState("")
    // const [kind, setKind] = useState("")
    const [count, setCount] = useState(10)
    const [reward, setReward] = useState("")

    const navigate = useNavigate()

    const { addPunchcard, newId, errors } = useContext(UserContext)

    const handlePunchcardSubmit = (e) => {

        e.preventDefault()

        addPunchcard({
                count: count,
                reward: reward,
                customer_id: newId
        })
        addPunchcardFlag()
    }

  return (
    <div>
        <br />
         <hr/>
        <main class="container">
            <form onSubmit={handlePunchcardSubmit}>
                <article className="card">
                    <p><em>Step 2 of 2</em></p>

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
                    
                    <br/>{errors}<br/>
                    <button className="button1" type="submit">Submit</button>

                </article>
                
            </form>
  
        </main>
        
        <hr/>
    </div>
  )
}

export default PunchcardForm

