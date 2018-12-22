import Config from 'react-native-config'
import Location from '../Types/Location'

class GeocoderService {
  public async searchByName(name: string): Promise<Location[]> {
    let locations: Location[] = []
    const apiKey = Config.GEOCODER_API_KEY
    const searchUrl = `https://geocoder.tilehosting.com/q/${name}.js?key=${apiKey}`
    try {
      const suggestionResult = await fetch(searchUrl)
      const suggestions = await suggestionResult.json()

      locations = suggestions.results as Location[]
    } catch (e) {
      console.error(e)
    }

    return locations
  }
}

const geocoder = new GeocoderService()

export { GeocoderService, geocoder }
