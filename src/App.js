import React from 'react';
import './App.css';
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
    console.log(this.state.current)
    return (
      <div className="App">
        <div className="header">Säätutka</div>
        <div className="content">{Object.entries(cities).map(function(city) {return city[1]})}</div>
        <div><CurrentWeather weather={this.state.current[0]} /></div>
        <div><Forecasts id="634964" /></div>
      </div>
    );
  }
}

export default App;
