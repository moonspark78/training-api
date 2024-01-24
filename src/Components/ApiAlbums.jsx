import React, { useEffect, useState } from 'react'
import "./ApiAlbums.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


export const ApiAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [albumsPerPage, setAlbumsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const numTotalOffPages = Math.ceil(albums.length/ albumsPerPage);
    const pages = [ ...Array(numTotalOffPages +1).keys()].slice(1);

    const indexOffLastAlbum = currentPage * albumsPerPage;
    const indexOffFirstAlbum = indexOffLastAlbum - albumsPerPage;

    const visbleAlbums = albums.slice(indexOffFirstAlbum,indexOffLastAlbum)

    const prevPages = () => {
        if (currentPage === 1) {
            return ""
        } else {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPages = () => {
        if (currentPage === 10) {
            return ""
        } else {
            setCurrentPage(currentPage + 1)
        }
    }



    useEffect(() => {
        const fetchCommentsData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums"); 
            const data = await response.json();
            console.log(data);
            setAlbums(data);
        };
        fetchCommentsData();
    },[])



  return (
    <div className='apiAlbums'>
        <h2>ApiAlbums</h2>
        <div className='albumsCard'>
            {
                visbleAlbums.map((album) =>(
                    <div key={album.id}>
                        <p>{album.title}</p>
                    </div>
                ))
            }
        </div>
        <br/>
        <br/>
        <br/>
        <span><FaArrowLeft onClick={prevPages}/></span>
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
        <span><FaArrowRight onClick={nextPages}/></span>
    </div>
  )
}
