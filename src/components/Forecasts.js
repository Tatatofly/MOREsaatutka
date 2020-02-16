import React from 'react'
import getWeather from '../services/getWeather'
import Forecast from './Forecast'

class Forecasts extends React.Component {
  state = {
    forecasts: []
  }
    
    componentDidMount() {
      const { id } = this.props
      getWeather.getForecast(id).then(data =>
        this.setState({ forecasts : data.list})
      );
    }
      
      render() {
        return (
          <div className="forecasts">
            <Forecast forecast={this.state.forecasts[0]} />
            <Forecast forecast={this.state.forecasts[1]} />
            <Forecast forecast={this.state.forecasts[2]} />
            <Forecast forecast={this.state.forecasts[3]} />
            <Forecast forecast={this.state.forecasts[4]} />
          </div>
        )
      }
    }
    
    export default Forecasts