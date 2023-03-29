import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import {Link} from 'react-router-dom'

const CustomerRow = ({customer, id}) => {

  const {punchcards} = useContext(UserContext)

  const punchcard = punchcards.find(p => p.customer_id === id)

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{customer}</td>
        <td>
       
        <Link to={`/punchcards/${punchcard.id}`}>
          OPEN
        </Link>
        
        </td>
    </tr>
  )
}

export default CustomerRow