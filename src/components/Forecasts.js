import React from 'react'
import getWheather from '../services/getWheather'
import Forecast from './Forecast'

class Forecasts extends React.Component {
  state = {
    forecasts: []
  }
    
    componentDidMount() {
      const { id } = this.props
      getWheather.getForecast(id).then(data =>
        this.setState({ forecasts : data.list})
      );
    }
      
      render() {

        return (
          <div>
            <Forecast forecast={this.state.forecasts[0]} />
          </div>
        )
      }
    }
    
    export default Forecasts