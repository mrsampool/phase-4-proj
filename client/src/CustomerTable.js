import React, { useState, useContext, useEffect } from 'react'
import CustomerRow from './CustomerRow'
import { UserContext } from './context/user'

const CustomerTable = () => {


  const {user, customers} = useContext(UserContext)

 

  const customerEntry = customers.map(c => 
    <CustomerRow customer={c.username}/>)

        console.log(customerEntry)

  return (
    <div>
      <h1>CLIENTELE</h1>
    <main class="container" >
      <input type="text" />
      <article>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Open</th>
            </tr>
          </thead>
          <tbody>

           
            {customerEntry}
          

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

export default CustomerTable