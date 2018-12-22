import React from 'react'
import { Input, Item } from 'native-base'
import Location from '../Types/Location'
import { geocoder } from '../Services/GeocoderService'

interface SearchLocationInputProps {
  onSearchResult: (locations: Location[]) => void
}
export default class SearchLocationInput extends React.Component<SearchLocationInputProps> {
  async onChange(text: string) {
    let locations: Location[] = []
    const { onSearchResult } = this.props
    if (text.length > 2) {
      locations = await geocoder.searchByName(text)
    }

    onSearchResult(locations)
  }

  render() {
    return (
      <Input placeholder="Search location or city" onChangeText={(text: string) => this.onChange(text)} />
    )
  }
}
