import React from 'react';
import './App.css';
import cities from './config/cities.json';
import getWheather from './services/getWheather'
import Forecasts from './components/Forecasts'

class App extends React.Component {

  state = {
    isLoading : false,
    isReady : false,
    current : []
  }

  componentDidMount() {
    this.setState({isLoading: true});
    getWheather.getCurrent(Object.entries(cities).map(function(city) {return city[0]})).then(data =>
      this.setState({ current : data.list})
    );
    this.setState({isLoading: false, isReady: true});
  }

  render() {
    return (
      <div className="App">
        <div className="header">Säätutka</div>
        <div className="content">{Object.entries(cities).map(function(city) {return city[1]})}</div>
        <div><Forecasts id="634964" /></div>
      </div>
    );
  }
}

export default App;
