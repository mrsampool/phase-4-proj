import React, { useContext } from 'react'
import { UserContext } from './context/user'
import {Link} from 'react-router-dom'

const CustomerFindRow = ({customer, id}) => {

  const { user } = useContext(UserContext)

  return (
    <tr>
        <td>{customer}</td>
        <td>
        {<Link to={`/customers/${id}`}>OPEN</Link>}
        </td>
    </tr>
  )
}

export default CustomerFindRow