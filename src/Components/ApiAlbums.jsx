import React, { useEffect, useState } from 'react'

export const ApiAlbums = () => {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        const fetchCommentsData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums"); 
        }; 
    },[])



  return (
    <div>
        <h2>ApiAlbums</h2>
    </div>
  )
}
