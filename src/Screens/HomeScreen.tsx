import React from 'react'
import { Container, Content, Header, Icon, Item } from 'native-base'
import { NavigationScreenProps } from 'react-navigation'
import SearchLocationInput from '../Components/SearchLocationInput'
import LocationList from '../Components/LocationList'
import Location from '../Types/Location'
import LocationType from '../Types/LocationType'
import EmptyContent from '../Components/EmptyContent'

interface HomeScreenProps extends NavigationScreenProps {
}

interface HomeScreenState {
  locations: Location[]
}

class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  state = {
    locations: [],
  }

  setLocations(locations: Location[]) {
    this.setState({
      locations: locations,
    })
  }

  render() {
    const { navigation } = this.props
    const { locations } = this.state
    const citiesOnly = locations.filter(
      (location: Location) =>
        [LocationType.city, LocationType.county, LocationType.state].indexOf(location.type) > -1
    )

    console.log(locations)
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search"/>
            <SearchLocationInput
              onSearchResult={(locations: Location[]) => this.setLocations(locations)}
            />
            <Icon type="MaterialIcons" name="location-city"/>
          </Item>
        </Header>
        <Content>
          {locations.length > 0 && (
            <LocationList
              locations={citiesOnly}
              onLocationPress={(location: Location) =>
                navigation.navigate('WeatherListScreen', { location: location })
              }
            />
          )}
          {locations.length === 0 && (
            <EmptyContent
              icon={<Icon type="MaterialIcons" name="location-city"/>}
              text="Nothing to display"
            />
          )}
        </Content>
      </Container>
    )
  }
}

export default HomeScreen
