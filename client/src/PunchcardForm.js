import React, { useState } from 'react'

const PunchcardForm = ({punchcard}) => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [count, setCount] = useState(0)

    // POST REQUEST TO CREATE
    const handleSubmit = (e) => {
        e.preventDefault()

        const punchcard = {
            name: punchcard.name,
            type: punchcard.type,
            count: punchcard.count,
            qrCode: punchcard.qrCode
        }

        fetch('/punchcards', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(punchcard),
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" id="name">

            </input>

            <input type="text" id="type">

            </input>

            <input type="" id="count">

            </input>


        </form>
    </div>
  )
}

export default PunchcardForm

