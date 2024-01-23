import React, { useEffect, useState } from 'react'
import "./ApiAlbums.css"

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
    <div className='apiAlbums'>
        <h2>ApiAlbums</h2>
        <div className='albumsCard'>
            {
                comments.map((comment) =>(
                    <p key={comment.id}>{comment.title}</p>
                ))
            }
        </div>
    </div>
  )
}
