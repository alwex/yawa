import Config from 'react-native-config'
import Location from '../Types/Location'
import WeatherResponse from '../Types/WeatherResponse'
import WeatherData from '../Types/WeatherData'

class WeatherService {
  public async findforLocation(location: Location): Promise<WeatherData[]> {
    let result: WeatherData[] = []

    const apiKey = Config.OPEN_WEATHER_MAP_API_KEY
    const endpoint = Config.OPEN_WEATHER_MAP_ENDPOINT
    const lat = location.lat
    const lon = location.lon
    const findWeatherUrl = `${endpoint}/data/2.5/forecast?cnt=100&APPID=${apiKey}&lat=${lat}&lon=${lon}&units=metric`

    try {
      const weatherResult = await fetch(findWeatherUrl)
      const weather = (await weatherResult.json()) as WeatherResponse
      result = weather.list
    } catch (error) {
      console.error(error)
      throw error
    }

    return result
  }
}

const weather = new WeatherService()

export { WeatherService, weather }
