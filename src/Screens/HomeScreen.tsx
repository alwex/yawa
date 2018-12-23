import React from 'react'
import { connect } from 'react-redux'
import { Container, Content, Header, Icon, Item } from 'native-base'
import { NavigationScreenProps } from 'react-navigation'
import SearchLocationInput from '../Components/SearchLocationInput'
import LocationList from '../Components/LocationList'
import Location from '../Types/Location'
import LocationType from '../Types/LocationType'
import EmptyContent from '../Components/EmptyContent'
import { AppState } from '../Redux'
import { locationActions, LocationState } from '../Redux/LocationRedux'
import { Dispatch } from 'redux'
import { uiActions } from '../Redux/UIRedux'
import WeatherDetails from '../Components/WeatherDetails'

interface HomeScreenProps extends NavigationScreenProps {
  locationState: LocationState
  searchLocations: (name: string) => void
  selectLocation: (location: Location) => void
  fetching: boolean
  error: boolean
}

interface HomeScreenState {}

class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  renderLocationList(locations: Location[]) {
    const { navigation, selectLocation } = this.props
    return (
      <LocationList
        locations={locations}
        onLocationPress={(location: Location) => {
          selectLocation(location)
          navigation.navigate('WeatherListScreen')
        }}
      />
    )
  }

  renderEmptyLocationList() {
    return (
      <EmptyContent
        iconName="weather-windy"
        iconType="MaterialCommunityIcons"
        text="Search for a location"
      />
    )
  }

  render() {
    const { searchLocations } = this.props
    const locations = this.props.locationState.locations
    const citiesOnly = locations.filter(
      (location: Location) =>
        [LocationType.city, LocationType.county, LocationType.state].indexOf(location.type) > -1
    )
    const locationsFound = locations.length > 0

    let content = null
    if (locationsFound) {
      content = this.renderLocationList(citiesOnly)
    } else {
      content = this.renderEmptyLocationList()
    }

    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <SearchLocationInput searchLocations={searchLocations} />
            <Icon type="EvilIcons" name="location" />
          </Item>
        </Header>
        <Content scrollEnabled={locationsFound}>{content}</Content>
      </Container>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  locationState: state.locations,
  fetching: state.locations.fetching,
  error: state.locations.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchLocations: (name: string) => dispatch(locationActions.search(name)),
  selectLocation: (location: Location) => dispatch(uiActions.selectCurrentLocation(location)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
