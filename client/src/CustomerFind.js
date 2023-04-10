import React, { useState, useContext } from 'react'
import CustomerFindRow from './CustomerRow'
import { UserContext } from './context/user'

const CustomerFind = () => {

  const [searchClient, setSearchClient] = useState("")

  const {user} = useContext(UserContext)

  const filterBySearch = user.customers.filter(c => c.username.toLowerCase().includes(searchClient.toLowerCase()))

  const customerEntry = filterBySearch.map(c => 
    <CustomerFindRow 
      key={c.id}
      id={c.id}
      customer={c.username}
      />)

  const handleSearchChange = (e) => {
    setSearchClient(e.target.value)
  }

  return (
    <div>
      
      <h1 className="title">ALL CLIENTELE</h1>
      
    <main class="container" >
  
      <input className="search" type="text" value={searchClient} onChange={handleSearchChange} placeholder={"SEARCH"} />
      <hr/>
      <article className="card">
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

            {customerEntry}
          
          </tbody>
        </table>
      </article>
      </main>
    </div>
  )
}

export default CustomerFind