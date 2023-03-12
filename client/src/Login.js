import React, { useState, useContext } from 'react'
import { UserContext } from "./context/user"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const { login } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers:  { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json())
      .then((user) => {
        if (!user.error) {
          login(user)
          navigate('/')
        } else { 
          setUsername("")
          setPassword("")
          const errorLi = user.error.map(e => <li>{e}</li>)  
          setError(errorLi)
        }      
      })
  }

  return (
    <>
    <br/>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <br />
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> 
        <br/><br/>
        <label>Password: </label>
        <br />
        <input 
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /> 
        <br/><br/>
        <input type="submit" />
      </form>

      <ul>
        {error}
      </ul>

    </>
  )
}

export default Login