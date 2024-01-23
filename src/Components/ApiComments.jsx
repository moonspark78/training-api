import React, { useEffect, useState } from 'react'

export const ApiComments = () => {
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/comments")
            const data = await response.json();
            setCommentsData(data);
            console.log(data);
        }
        fetchData();
    },[])

  return (
    <div>
        <h1>ApiComments</h1>
        {
            commentsData.map((comment => (
                <p>{commentsData.name}</p>
            )))
        }
    </div>
  )
}
