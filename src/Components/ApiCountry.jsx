import React, { useEffect, useState } from 'react'

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
    <div>
        <h3 style={{textDecoration: "underline", color: "blue"}}>ApiCountry</h3>
         {
            countriesData.map((countrieData) => (
                <p>{countrieData.name.common}</p>
            ))
         }
    </div>
  )
}
