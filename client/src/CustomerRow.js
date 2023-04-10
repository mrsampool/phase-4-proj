import React, { useContext } from 'react'
import { UserContext } from './context/user'
import {Link} from 'react-router-dom'

const CustomerRow = ({customer, id}) => {

  const { user } = useContext(UserContext)

  const punchcard = user.punchcards.find(p => p.customer_id === id)

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{customer}</td>
        <td>
       
        {punchcard && <Link to={`/customers/${id}`}>OPEN</Link>}
        
        </td>
    </tr>
  )
}

export default CustomerRow