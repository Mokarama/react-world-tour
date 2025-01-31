import {useState, useEffect } from "react";
import Country from "../Country/Country";
import './countries.css'



const Countries = () => {
    const [countries, setCountries] =useState([])

    const [visitedCountries, setVisitedCountries] =useState([]);

    const [visiteFlags,setVisiteFlags] =useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountries(data))
    },[])
     
  

    const handleVisitedCountries =country =>{
        console.log('add this to your visited country')
        // console.log(country);
        // visitedCountries.push(country);
        const newVisitedCountries =[...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }


    const handleVisitedFlags = flag =>{
        // console.log('flag adding');
        const nweVisitedFlags =[...visiteFlags, flag];
        setVisiteFlags(nweVisitedFlags);
    }
    return (
        <div>
         
            <h3>Countries:{countries.length}</h3>
            {/*Visited country  */}
           
           <div>
           <h5>Visited Countries:{visitedCountries.length}</h5>
           </div>

        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>

        <div className="flag-container">
            {
                visiteFlags.map(flag => <img src={flag}/> )
            } 

        </div>
           {/* disply countries */}
          <div className="country-container">
          {
                countries.map(country => 
                <Country key={country.cca3} handleVisitedCountries ={handleVisitedCountries}
                handleVisitedFlags ={handleVisitedFlags}
                    country={country}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;