import React, { useEffect, useState } from 'react'
import "./ApiComments.css"

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
    <div className='ApiComments'>
        <h1>ApiComments</h1>
        <div className='commentsCard'>
        {
            commentsData.map((comment => (
                <div key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                </div>
            )))
        }
        </div>
    </div>
  )
}
