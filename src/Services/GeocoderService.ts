import Config from 'react-native-config'
import Location from '../Types/Location'

class GeocoderService {
  public async searchByName(name: string): Promise<Location[]> {
    let result: Location[] = []
    const apiKey = Config.GEOCODER_API_KEY
    const endpoint = Config.GEOCODER_SERVICE_ENDPOINT
    const searchUrl = `${endpoint}/q/${name}.js?key=${apiKey}`
    try {
      const suggestionResult = await fetch(searchUrl)
      const suggestions = await suggestionResult.json()
      result = suggestions.results as Location[]
    } catch (error) {
      console.error(error)
      throw error
    }

    return result
  }
}

const geocoder = new GeocoderService()

export { GeocoderService, geocoder }
