import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerRow = ({customer}) => {

    // const [customer, setCustomer] = useState("")

    // const {user, punchcards} = useContext(UserContext)

    
  return (
    <tr>
        <th scope="row">1</th>
        <td>{customer}</td>
        <td>Open Punchcard</td>
    </tr>
  )
}

export default CustomerRow