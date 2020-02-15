import React from 'react'

class Forecast extends React.Component {
    
    render() {
      const { forecast } = this.props
      if(forecast) {
        return (
          <div>
            <p>{forecast.weather[0].main}</p>
          </div>
        )
      }
      return (
        <div>
          <p></p>
        </div>
      )
    }
  }
  
  export default Forecast