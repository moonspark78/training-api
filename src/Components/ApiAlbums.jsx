import React, { useEffect, useState } from 'react'

export const ApiAlbums = () => {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        const fetchCommentsData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums"); 
            const data = await response.json();
            console.log(data);
            setComments(data);
        };
        fetchCommentsData();
    },[])



  return (
    <div>
        <h2>ApiAlbums</h2>
        {
            comments.map((comment) =>(
                <p key={comment.id}>{comment.title}</p>
            ))
        }
    </div>
  )
}
