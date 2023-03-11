import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

//     // reason this GLOBAL STATE is awesome, everytime any page is refreshed, this is rereshed, so it's a v good place to GET user /me 
// do not have to pass this stuff through props. IT'S AVAILABLE EVERYWHERE!

const UserProvider = ( {children }) => {

    const [user, setUser] = useState(null)


    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            // gets userdata from backend, then sets it to global state
            setUser(data)
            // add data here for what user can do
        })    
    }, [])

    const login = () => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    const signup = (user) => {
        setUser(user)
    }

  return (

    <UserContext.Provider value={{user, login, logout, signup}}>
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