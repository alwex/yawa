import React from 'react'
import { Body, Icon, List, ListItem, Right, Text } from 'native-base'
import Location from '../Types/Location'

interface LocationListProps {
  locations: Location[]
  onLocationPress: (location: Location) => void
}

export default class LocationList extends React.Component<LocationListProps> {
  render() {
    const { locations, onLocationPress } = this.props
    return (
      <List>
        {locations.map(location => (
          <ListItem onPress={() => onLocationPress(location)} key={location.display_name}>
            <Body>
              <Text>{location.name}</Text>
              <Text note>{location.name_suffix}</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        ))}
      </List>
    )
  }
}
