import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'

const UserContext = React.createContext()

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState({
      customers: []
    }) 
    const [loggedIn, setLoggedIn] = useState(false) 
    const [ allCustomers, setAllCustomers ] = useState([])
    const [newId, setNewId] = useState(null)
    const [formFlag, setFormFlag] = useState(true)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

 
    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            setUser(data)
            if (data.errors) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                getUserClimbs()
            }
        })    
    }, [loggedIn])

   const getUserClimbs = () => {
      fetch('/customers')
      .then(resp => resp.json())
      .then(data => setAllCustomers(data))
   }
      

   console.log(user)
 
  


      
   const addPunchcard = (punchcard) => {
    fetch('/punchcards', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(punchcard)
    })
    .then(resp => resp.json())
    .then(data => {
        if (!data.errors) {
            setAllCustomers(prevCustomers => [...prevCustomers, data.punchcard])
            // setUser(prevUser => {
            //     const updatedCustomers = prevUser.customers.map(c => {
            //         if (c.id === data.customer.id) {
            //             return data.customer;
            //         }
            //         return c;
            //     });
            //     return { ...prevUser, customers: updatedCustomers };
            // });
            setFormFlag(true)
            navigate(`/customers/${data.customer_id}`)
            setErrors([])
        } else {
            const errorLis = data.errors.map( e => <li>{e}</li>)
            setErrors(errorLis)
        }
    }) 
}


    const addCustomer = (customer) => {
        fetch('/customers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
    })
    .then(resp => resp.json())
    .then(data => {
        if(!data.errors) {
          setUser(prevState => ({
            ...prevState,
            customers: [...prevState.customers, data]
          }))
            setNewId(data.id)
            navigate(`/customers/${data.id}`)
            setErrors([])
            setFormFlag(false)
        } else {
            const errorLis = data.errors.map(e => <li>{e}</li>)
            setErrors(errorLis)
        }
        })
    }

    const editCustomerName = (customer) => {
        fetch(`/customers/${customer.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
        })
        .then(resp => resp.json())
        .then((data) => handleEditedCustomer(data))
    }

    const handleEditedCustomer = (editedCustomer) => {
      const updatedCustomers = user.customers.map((p) =>
        p.id === editedCustomer.id ? editedCustomer : p
      );
      setUser((prevUser) => ({ ...prevUser, customers: updatedCustomers }));
    };

    const deleteCustomer = (id) => {
      fetch(`/customers/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setUser((prevUser) => ({
            ...prevUser,
            customers: prevUser.customers.filter((c) => c.id !== parseInt(id)),
          }));
          navigate("/customers");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // const editPunchcard = (punchcard) => {
    //     fetch(`/punchcards/${punchcard.id}`, {
    //         method: 'PATCH',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(punchcard)
    //     })
    //     .then(resp => resp.json())
    //     .then((data) => handleEditedPunchcard(data))
    // }

    const editPunchCount = (punchcard) => {
        fetch(`/punchcards/${punchcard.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(punchcard)
        })
        .then(resp => resp.json())
        .then((data) => handleEditedPunchcard(data))
    }

    const handleEditedPunchcard = (editedPunchcard) => {
        const updatedPunchcard = user.punchcards.map((p) => {
          if (p.id === editedPunchcard.id) {
            return editedPunchcard
          }
          return p 
        })
        setUser(editedPunchcard);
      }

 
    const login = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

    const logout = () => {
        setUser({
          customers: []
        })
        setLoggedIn(false)
        
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

  

  return (

    <UserContext.Provider value={{ user, login, logout, signup, loggedIn, addPunchcard, editPunchCount, deleteCustomer,
    // punchcards, editPunchcard,editPunchCount
     addCustomer, newId, errors, formFlag, editCustomerName,
      allCustomers 
      }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }