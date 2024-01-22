import React, { useEffect, useState } from 'react'
import "./ApiUsers.css"

export const ApiUsers = () => {
    const [UserData, setUserData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err))
    },[]);





  return (
    <div className="ApiUsers">
        <h1>ApiUsers</h1>
        <div className='Card'>
            {
                UserData.map((user => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )))
            }
        </div>
    </div>
  )
}
