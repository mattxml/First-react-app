import React from 'react';
import './Result.css';
const Result = (props) => {
    // eslint-disable-next-line 
    let { date, sunrise,sunset,temp,pressure, wind, city,err} = props.weather
    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
       // eslint-disable-next-line
    if(!err && city.length>2){
            content = (
           <div className="Result">
            <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
            <h4>Dane dla dnia i godziny : {date}</h4>
            <h4>Aktualna Temperatura : {temp} &#176;C</h4>
            <h4>Wschod slonca dzisiaj o : {sunriseTime}</h4>
            <h4>Zachód slonca dzisiaj o : {sunsetTime}</h4>
            <h4>Aktualna sila wiatru: {wind} m/s</h4>
            <h4>Aktualne cisnie: {pressure} hPa</h4>
            </div>
        )
    }
    return (
        <div className="Result">
                {(() => {
                    if(!err) {
                        return content
                    }
                    else if(city.length > 1 & city.length < 9){
                        return `Nie mamy w bazie ${city} `
                    }
                    else if(city.length > 10){
                        city = ""
                    }
                 

                })()}
     
        </div>
    );
}
export default Result;
