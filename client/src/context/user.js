import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

// reason GLOBAL STATE is awesome, everytime any page is refreshed, this is rereshed, so it's a v good place to GET user /me 
// do not have to pass this stuff through props. IT'S AVAILABLE EVERYWHERE!

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState(null) //or is it {}?
    const [loggedIn, setLoggedIn] = useState(false) // add loggedIn flag


    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            // gets userdata from backend, then sets it to global state
            setUser(data)
            data.error ? setLoggedIn(false) : setLoggedIn(true) //logged in flag depending whether or not there is an error
            // add data here for what user can do
        })    
    }, [])

    const login = () => {
        //should this be {} or null?
        setUser(user)
        setLoggedIn(true) //sets the flag
    }

    const logout = () => {
        setUser(null)
        setLoggedIn(false) //sets the flag
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) //sets the flag
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