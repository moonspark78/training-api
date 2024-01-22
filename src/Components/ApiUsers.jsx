import React, { useEffect, useState } from 'react'

export const ApiUsers = () => {
    const [UserData, setUserData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err))
    },[]);





  return (
    <div>
        <h1>ApiUsers</h1>
        
        {
            UserData.map((user => (
                <>
                    <p key={user.id}>{user.name}</p>
                    <p>{user.email}</p>
                </>
            )))
        }
    </div>
  )
}
