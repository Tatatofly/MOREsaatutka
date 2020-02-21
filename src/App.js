import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import cities from './config/cities.json';
import getWeather from './services/getWeather'
import Forecasts from './components/Forecasts'
import CurrentWeather from './components/CurrentWeather'

class App extends React.Component {

  state = {
    isLoading : false,
    isReady : false,
    current : []
  }

  componentDidMount() {
    this.setState({isLoading: true});
    getWeather.getCurrent(Object.entries(cities).map(function(city) {return city[0]})).then(data =>
      this.setState({ current : data.list})
    );
    this.setState({isLoading: false, isReady: true});
  }

  render() {
    function changeCity(id) {
      const cityElements = document.getElementsByClassName("cities")
      const cityArray = Array.from(cityElements)
      if(id === "0") {
        cityArray.map(ce => ce.style.display = "inline")
      } else {
        const hideElements = cityArray.filter(ce => ce.id !== id)
        const showElements = cityArray.filter(ce => ce.id === id)
        hideElements.map(ce => ce.style.display = "none")
        showElements.map(ce => ce.style.display = "inline")
      }
    }

    return (
      <div className="App">
        <div className="header">Säätutka</div>
        <Container>
          <div className="dropDown">
            <select className="custom-select" value={this.state.cityFilter} onChange={(e) => changeCity(e.target.value)}>>
              <option value="0">Kaikki kaupungit</option>
              {Object.entries(cities).map((city) => <option key={city[0]} value={city[0]}>{city[1]}</option>)}
            </select>
          </div>
          {Object.entries(cities).map((city,i) => 
          <div key={city[0]} id={city[0]} className="cities">
          <Jumbotron className="content">
            <CurrentWeather weather={this.state.current[i]} />
          </Jumbotron>
          <Forecasts id={city[0]}/> 
          </div>)}
        </Container>
      </div>
    );
  }
}

export default App;
