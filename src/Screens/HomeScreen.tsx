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

interface HomeScreenProps extends NavigationScreenProps {
  locationState: LocationState
  searchLocations: (name: string) => void
  selectLocation: (location: Location) => void
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
        icon={<Icon type="MaterialIcons" name="location-city" />}
        text="Nothing to display"
      />
    )
  }

  render() {
    const { navigation, searchLocations } = this.props
    const locations = this.props.locationState.locations
    const citiesOnly = locations.filter(
      (location: Location) =>
        [LocationType.city, LocationType.county, LocationType.state].indexOf(location.type) > -1
    )

    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <SearchLocationInput searchLocations={searchLocations} />
            <Icon type="MaterialIcons" name="location-city" />
          </Item>
        </Header>
        <Content>
          {locations.length > 0 && this.renderLocationList(citiesOnly)}
          {locations.length === 0 && this.renderEmptyLocationList()}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  locationState: state.locations,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchLocations: (name: string) => dispatch(locationActions.search(name)),
  selectLocation: (location: Location) => dispatch(uiActions.selectCurrentLocation(location)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
