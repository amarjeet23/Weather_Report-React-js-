import React, { Component } from 'react';
import Form from './Form';
import Title from './Title';
import Weather from './Weather';
import './App.css';


const API_KEY = "ad5a4c447bddf054fdc526bd42c0523a";




class App extends Component {
  state={
    temperature:undefined,
    city : '',
    country: '',
    humidity: '',
    description: '',
    error:''

  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      console.log(data)
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""
    });

    }else{
      console.log(data)
    this.setState({
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:"please enter the value"
    });
    }
    
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        
        />
       
      </div>
    );
  }
}

export default App;
