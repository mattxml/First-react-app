import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
const Apikey = process.env.REACT_APP_WEATHER_API_KEY;
class App extends Component {
  state = {
    value:'',
    date: ' ',
    city: ' ',
    sunrise: ' ',
    sunset: ' ',
    temp: ' ',
    pressure: ' ',
    wind: ' ',
    err: false,
  }   
  handleInputChange = (e) => {
    this.setState({
      value:e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.value !== this.state.value){
        const API = 
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${Apikey}&units=metric`;
        fetch(API)
        .then(response => {
          if(response.ok){
            return response
          }
          else{
            throw Error("nie")
          }
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState(state => ({
            err:false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: state.value,
          }))
        })
        .catch(err => {
          console.log(err)
          this.setState(prevState => ({
            err:true,
            city:prevState.value,
    
          }))
      })
      }
  }
  render() {
    return (
      <div className="App">
        
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        />
        <Result weather={this.state}/>
      </div>
    )
  }
}

export default App;
