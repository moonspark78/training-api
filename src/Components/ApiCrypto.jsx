import React, { useState, useEffect } from 'react'

export const ApiCrypto = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.coincap.io/v2/assets/");
            const data = await response.json();
            console.log(data.data);
            setCryptoData(data.data)
        };
        fetchData();
    },[]);




  return (
    <div>
        <h3 style={{textDecoration:"underline", color:"red"}}>ApiCrypto</h3>
        {
            cryptoData.map(crypto => (
                <>
                    <p>{crypto.name}</p>
                    <a href={crypto.explorer}>Info Sur la Crypto</a>
                </>
            ))
        }
    </div>
  )
}
