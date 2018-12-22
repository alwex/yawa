import React from 'react'
import { Input } from 'native-base'

interface SearchLocationInputProps {
  searchLocations: (name: string) => void
}

export default class SearchLocationInput extends React.Component<SearchLocationInputProps> {
  render() {
    const { searchLocations } = this.props
    return (
      <Input
        placeholder="Search location or city"
        onChangeText={(text: string) => searchLocations(text)}
      />
    )
  }
}
