import React from 'react'

class Forecast extends React.Component {
    
    render() {
      const { forecast } = this.props;
      if(forecast) {
        let snow = ""
        if(forecast.snow) {
          snow = forecast.snow["3h"];
        } else {
          snow = forecast.rain["3h"];
        }
        return (
          <div className="singleForecast">
            {forecast.dt_txt}<br />
            <img src={"http://openweathermap.org/img/wn/" + forecast.weather[0].icon + ".png"} alt={forecast.weather[0].icon} /><br />
            {forecast.main.temp}<br />
            {forecast.wind.speed}<br />
            {forecast.clouds.all}%<br />
            {snow}mm
          </div>
        )
      }
      return (
        <div>
          <p>Loading</p>
        </div>
      )
    }
  }
  
  export default Forecast