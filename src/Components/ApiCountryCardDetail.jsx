import React from 'react'
import { useParams } from 'react-router-dom';
import "./ApiCountryCardDetail.css"

export const ApiCountryCardDetail = ({ countriesData }) => {
    const { countryIndex } = useParams();
    const country = countriesData[countryIndex];

    if (!country) {
        // Gérer le cas où le pays n'est pas trouvé
        return <div>Country not found</div>;
    }

  return (
    <div className='country-detail'>
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: "150px", height: "100px" }} />
            {/* Ajoutez d'autres informations que vous souhaitez afficher */}
        </div>
  )
}
