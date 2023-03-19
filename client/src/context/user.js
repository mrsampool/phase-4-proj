import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

// reason GLOBAL STATE is awesome, everytime any page is refreshed, this is rereshed, so it's a v good place to GET user /me 
// do not have to pass this stuff through props. IT'S AVAILABLE EVERYWHERE!

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState(null) //or is it null?
    const [loggedIn, setLoggedIn] = useState(false) // add loggedIn flag
    const [punchcards, setPunchcards] = useState([])
    const navigate = useNavigate()

    // console.log(user)

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            // gets userdata from backend, then sets it to global state
            setUser(data)
           //logged in flag depending whether or not there is an error
            if (data.errors) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                // a fetch in a fetch
                fetchPunchcards()
            }
        })    
    }, [])
    
    // below fetch not necessary?
    const fetchPunchcards = () => {
        fetch('/punchcards')
        .then(resp => resp.json())
        .then(data => {
            setPunchcards(data)
        })
    }

    // all fetchs could be in global state? they do not have to live in the individual forms. for clean components, take fetches and put them all into global state. 

    const addPunchcard = (punchcard) => {
            fetch('/punchcards', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(punchcard)
        })
        .then(resp => resp.json())
        .then(data => {
            setPunchcards([...punchcards, data])
        })
    }

    const editPunchcard = (punchcard) => {
        fetch(`/punchcards/${punchcard.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(punchcard)
        })
        .then(resp => resp.json())
        .then((data) => handleEditedPunchcard(data))
    }

    const handleEditedPunchcard = (editedPunchcard) => {
        const updatedPunchcard = punchcards.map((p) => {
         if (p.id === editedPunchcard.id) {
           return editedPunchcard;
         }
         return punchcards
       })
       setPunchcards(updatedPunchcard);
     }

    const deletePunchcard = (id) => {
        fetch(`/punchcards/${id}`, {
            method: 'DELETE',
        })
        .then(() => onPunchcardDelete(id))
        .catch(error => console.log(error))
    }
    
    const onPunchcardDelete = (id) => {
        const updatedPunchcards = punchcards.filter((w) => w.id !== id)
        setPunchcards(updatedPunchcards)
        fetchPunchcards()
        navigate('/punchcards')
      }

    const login = (user) => {
        setUser(user)
        // a better way to fetch would be to send nested json from backend
        fetchPunchcards()
        setLoggedIn(true) 
    }

    const logout = () => {
        setUser(null)
        setLoggedIn(false)
        setPunchcards([])
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

  return (

    <UserContext.Provider value={{ user, login, logout, signup, loggedIn, punchcards, addPunchcard, deletePunchcard, editPunchcard }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }

// function UserProvider({ children }) {
//     return (
//         <UserContext.Provider value={{}}>
//             {children}
//         </UserContext.Provider>
//     )
// }