import axios from 'axios'
import apikey from '../apikey.json'

const currentStart = "http://api.openweathermap.org/data/2.5/group?id="
const foreStart = "http://api.openweathermap.org/data/2.5/forecast?id="

const urlEnd = "&units=metric&appid=" + apikey.key

const getCurrent = async (cities) => {
  const url = await currentStart + cities.map(function(city) {return city}) + urlEnd;
  const response = await axios.get(url)
  return response.data
}

const getForecast = async (city) => {
  const response = await axios.get(foreStart + city + urlEnd)
  return response.data
}

export default { getCurrent, getForecast }