import React from 'react'

class CurrentWeather extends React.Component {
    
    render() {
      const { weather } = this.props;
      if(weather) {
        return (
          <div>
            {weather.name}<br />
            {weather.weather[0].main}
          </div>
        )
      }
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
  }
  
  export default CurrentWeather