import React, { useContext } from 'react'
import { UserContext } from './context/user'
import {Link} from 'react-router-dom'

const AllCustomersRow = ({name, id}) => {

//   const {} = useContext(UserContext)

  return (
    <tr>
        <td>{name}</td>
        <td>
        {<Link to={`/customers/${id}`}>OPEN</Link>}
        </td>
        <td>
        {id}
        </td>
    </tr>
  )
}

export default AllCustomersRow