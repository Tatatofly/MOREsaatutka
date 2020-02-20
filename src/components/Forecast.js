import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

class Forecast extends React.Component {
    
    render() {
      const { forecast } = this.props;
      if(forecast) {
        let snow = "0"
        if(forecast.snow) {
          snow = forecast.snow["3h"];
        } else if(forecast.rain) {
          snow = forecast.rain["3h"];
        }
        return (
          <div>
            <Jumbotron className="singleForecast forecastHeader">
              {(forecast.dt_txt.split(' '))[1].split(':').splice(0,1)}:00<br />
              <img src={"http://openweathermap.org/img/wn/" + forecast.weather[0].icon + ".png"} alt={forecast.weather[0].icon} /><br />
              <span className="forecastTemp">{Math.round(forecast.main.temp)}°C<br /></span>
            </Jumbotron>
            <Jumbotron className="singleForecast forecastFooter">
                {Math.round(forecast.wind.speed * 10) / 10} m/s<br /> {/* TODO: Pyöristys kahden desimaalin tarkkuudella ja vika pois jos nolla */}
                {Math.ceil(forecast.clouds.all/5)*5} %<br />
                {Math.round(snow)} mm
            </Jumbotron>
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
  
  export default Forecast