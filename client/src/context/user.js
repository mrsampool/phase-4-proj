import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

// reason GLOBAL STATE is awesome, everytime any page is refreshed, this is rereshed, so it's a v good place to GET user /me 
// do not have to pass this stuff through props. IT'S AVAILABLE EVERYWHERE!

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState({}) //or is it null?
    const [loggedIn, setLoggedIn] = useState(false) // add loggedIn flag
    const [punchcards, setPunchcards] = useState([])


    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            // gets userdata from backend, then sets it to global state
            setUser(data)

           //logged in flag depending whether or not there is an error
            // add data here for what user can do
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                // below code blows my mind -- a fetch in a fetch
                fetchPunchcards()
            }
        })    
    }, [])

    const fetchPunchcards = () => {
        fetch('/punchcards')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setPunchcards(data)
        })
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

  return (

    <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
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