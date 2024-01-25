import React, { useEffect, useState } from 'react'
import "./ApiCountry.css"

export const ApiCountry = () => {
    const [countriesData, setCounriesData]= useState([]);

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
                        <p>{countrieData.name.common}</p>
                        <p>{countrieData.capital}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
