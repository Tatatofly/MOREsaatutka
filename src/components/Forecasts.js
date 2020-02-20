import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        let fore = this.state.forecasts.slice(0, 5).map(i => {
          return <Col key={i.dt} className="fiveMarginLR"><Forecast key={i.dt} forecast={i} /></Col>
        })

        return (
          <Row className="noOverflow">
            {fore}
          </Row>
        )
      }
    }
    
    export default Forecasts