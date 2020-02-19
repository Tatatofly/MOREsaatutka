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
      let ids = id
      if(id === 0) { 
        ids =  655195
      }
      getWeather.getForecast(ids).then(data =>
        this.setState({ forecasts : data.list})
      );
    }
      
      render() {
        return (
          <div className="forecasts">
            <Row> {/* TODO: looppia tähän */}
              <Col>
                <Forecast forecast={this.state.forecasts[0]} />
              </Col>
              <Col>
                <Forecast forecast={this.state.forecasts[1]} />
              </Col>              
              <Col>
                <Forecast forecast={this.state.forecasts[2]} />
              </Col>              
              <Col>
                <Forecast forecast={this.state.forecasts[3]} />
              </Col>              
              <Col>
                <Forecast forecast={this.state.forecasts[4]} />
              </Col>
            </Row>
          </div>
        )
      }
    }
    
    export default Forecasts