
import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountries,handleVisitedFlags}) => {
    const {name,flags,capital,area,cioc,cca3} =country;

    const [visited, setVisited] =useState(false);

    const handleVisited =() =>{
        setVisited(!visited);
    }

    const passWidthParams =() =>handleVisitedCountries(country);
   
    // console.log(handleVisitedCountries);

    
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color:visited ? 'purple' : 'white'}}  >{name.common}</h3>
            <img src={flags.png} alt="" />
            <h2>Capital:{capital}</h2>
            <p>Area:{area}</p>
            <h2>Cioc:{cioc}</h2>
            <h2><small>Code:{cca3}</small></h2>
            
            <button onClick={() =>handleVisitedCountries(country)}>Mark Visited</button> 
            <br/>
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br/>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going' }</button>
          

          {visited ? 'I have visited this country' : 'I went to visite'}
        </div>
    );
};

export default Country;