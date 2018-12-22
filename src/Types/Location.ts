import LocationType from './LocationType'

interface Location {
  alternative_names: string
  boundingbox: [number, number, number, number]
  display_name: string
  lon: number
  lat: number
  name: string
  name_suffix: string
  type: LocationType
}

export default Location
