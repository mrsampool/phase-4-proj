import React, { useState, useContext, useEffect } from 'react'
import CustomerRow from './CustomerRow'
import { UserContext } from './context/user'

const CustomerTable = () => {

  const [name, setName] = useState("")

  const {user} = useContext(UserContext)

  // const customerRow = user.customers.map(c => 
  //   <CustomerRow 
  //       key={c.id}
  //       customer={c}/>)

  if(!name){
    return(
      <div>
      <hr />
      <h1>CLIENTELE</h1>
      <p>No customers, yet!</p>
      </div>
    )
    } else {

  return (
    <div>
      <h1>CLIENTELE</h1>
    <main class="container" >
      <input type="text" />
      <article>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Open</th>
            </tr>
          </thead>
          <tbody>

            {/* {customerRow} */}
     
          </tbody>
          {/* <tfoot>
            <tr>
              <th scope="col">#</th>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
              <td scope="col">Total</td>

            </tr>
          </tfoot> */}
        </table>
      </article>
      </main>
    </div>
  )
}
}

export default CustomerTable