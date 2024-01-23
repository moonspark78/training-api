import React, { useEffect, useState } from 'react'
import "./ApiComments.css"

export const ApiComments = () => {
    const [commentsData, setCommentsData] = useState([]);
    const [commentPerPage, setCommentPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1)

    const numTotalOfPages = Math.ceil(commentsData.length/ commentPerPage);
    const pages  =[...Array(numTotalOfPages +1).keys()].slice(1)

    const prevPageHandler = () => {};
    const nextPageHandler = () => {};

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
        <h3 style={{textDecoration:"underline"}}>ApiComments</h3>
        <div className='commentsCard'>
        {
            commentsData.map((comment => (
                <div key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                </div>
            )))
        }
        <br/>
        <br/>
        <br/>
        <span onClick={prevPageHandler}>Prev</span>
        <p>
            {
                pages.map((page) =>(
                    <span  
                        className={`${currentPage === page ? "active" : ''}`}
                        key={page}
                        onClick={() => setCurrentPage(page)}
                    >{`${page} | `}</span>
                ))
            }
        </p>
        <span onClick={nextPageHandler}>Prev</span>

        </div>
    </div>
  )
}
