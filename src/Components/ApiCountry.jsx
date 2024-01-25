import React, { useEffect, useState } from 'react'
import "./ApiCountry.css"

export const ApiCountry = () => {
    const [countriesData, setCounriesData]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage, setCountyPerPage] = useState(10);

    const numTotalOfPages = Math.ceil(countriesData.length / countryPerPage)
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

    

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
            
                countriesData.map((countrieData, index) => (
                    <div key={index}>
                        <p id='bold'>{countrieData.name.common}</p>
                        <p>{countrieData.capital}</p>
                        <img src={countrieData.flags.png} alt='flagOfCountry' style={{width:"95px", height:"70px"}}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
