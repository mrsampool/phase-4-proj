import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerRow = () => {

    const [customer, setCustomer] = useState("")

    const {user, punchcards} = useContext(UserContext)

    
  return (
    <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
  )
}

export default CustomerRow