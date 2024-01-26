import React from 'react'
import { useParams } from 'react-router-dom';
import "./ApiCountryCardDetail.css"

export const ApiCountryCardDetail = ({ countryData }) => {
    const { countrieData } = useParams();

  return (
    <div className='country-detail'>
            <h2>{countrieData.name.common}</h2>
            <p>Population: {countrieData.population}</p>
            <img src={countrieData.flags.png} alt={`Flag of ${countrieData.name.common}`} style={{ width: "150px", height: "100px" }} />
            {/* Ajoutez d'autres informations que vous souhaitez afficher */}
        </div>
  )
}
