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
    cityFilter : 0,
    current : []
  }

  // TODO: Logiikka kaupunkien vaihdoille

  componentDidMount() {
    this.setState({isLoading: true});
    getWeather.getCurrent(Object.entries(cities).map(function(city) {return city[0]})).then(data =>
      this.setState({ current : data.list})
    );
    this.setState({isLoading: false, isReady: true});
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="header">Säätutka</div>
        <Container>
          <div className="dropDown">
            <select className="custom-select" value={this.state.cityFilter} onChange={(e) => this.setState({cityFilter: e.target.value})}>>
              <option value="0">Kaikki kaupungit</option>
              {Object.entries(cities).map((city) => <option key={city[0]} value={city[0]}>{city[1]}</option>)}
            </select>
          </div>
          <Jumbotron className="content">
            <CurrentWeather weather={this.state.current[2] /* STAATTINEN VIELÄ */} />
          </Jumbotron>
          <Jumbotron className="content">
            <Forecasts id={this.state.cityFilter} />
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default App;
