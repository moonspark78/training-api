import React, { useEffect, useState } from 'react'

export const ApiUsers = () => {
    const [Userdata, setUserData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUserData(data)
            })
            .catch(err => console.error(err))

    },[]);





  return (
    <div>ApiUsers</div>
  )
}
