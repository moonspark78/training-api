import React, { useEffect, useState } from 'react'
import "./ApiCountry.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const ApiCountry = () => {
    const [countriesData, setCounriesData]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage, setCountyPerPage] = useState(10);

    const numTotalOfPages = Math.ceil(countriesData.length / countryPerPage);
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

    const pages = [...Array(numTotalOfPages +1).keys()].slice(1);
    const visibleCountries= countriesData.slice(indexOfFirstCountry, indexOfLastCountry)

    const prevPageHandler = () =>{
        if (currentPage === 1) {
            return ""
        } else {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPageHandler = () =>{
        if (currentPage === 25) {
            
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() =>{
        const fetchData = async () =>{
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCounriesData(data);
            console.log(data);
        }
        fetchData();
    },[])


  return (
    <div className='country'>
        <h3 style={{textDecoration: "underline", color: "blue"}}>ApiCountry</h3>
        <div className='countryCard'>
            {
            
                visibleCountries.map((countrieData, index) => (
                    <Link to={`/detail/${countrieData.name.common}`} key={index} state={{ countrieData }}>
                    <div>
                        <p id='bold'>{countrieData.name.common}</p>
                        <p>{countrieData.capital}</p>
                        <img src={countrieData.flags.png} alt='flagOfCountry' style={{width:"95px", height:"70px"}}/>
                    </div>
                    </Link>
                ))
            }
        </div>

        <div className='pages'>
          <FaArrowLeft style={{marginRight:"7px"}} onClick={prevPageHandler}/>
            {
                pages.map((page) =>(
                    <span
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`${currentPage === page ? "active" : ''}`}
                    >
                        {`${page }   |  `}
                    </span>
                ))
            }
          <FaArrowRight style={{marginLeft:"7px"}} onClick={nextPageHandler}/>
        </div>
    </div>
  )
}
