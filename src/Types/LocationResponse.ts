import Location from './Location'

interface LocationResponse {
  count: number
  nextIndex: number
  startIndex: number
  totalResults: number
  results: Location[]
}

export default LocationResponse
