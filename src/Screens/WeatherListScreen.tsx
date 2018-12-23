import React from 'react'
import { connect } from 'react-redux'
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Subtitle,
  Text,
  Title,
} from 'native-base'
import { NavigationScreenProps } from 'react-navigation'
import Location from '../Types/Location'
import { AppState } from '../Redux'
import { Dispatch } from 'redux'
import { weatherActions } from '../Redux/WeatherRedux'
import WeatherData from '../Types/WeatherData'
import WeatherList from '../Components/WeatherList'

interface WeatherListScreenProps extends NavigationScreenProps {
  location?: Location
  forecasts: WeatherData[]
  loadWeather: () => void
}

class WeatherListScreen extends React.Component<WeatherListScreenProps> {
  componentDidMount(): void {
    this.props.loadWeather()
  }

  renderWeatherFor(location: Location) {
    const { navigation, forecasts } = this.props
    return (
      <>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Forecasts</Title>
            <Subtitle>{location.name}</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <WeatherList onPress={() => {}} location={location} forecasts={forecasts} />
        </Content>
      </>
    )
  }

  renderError() {
    return null
  }

  render() {
    const { location } = this.props
    return (
      <Container>
        {location && this.renderWeatherFor(location)}
        {!location && this.renderError()}
      </Container>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.ui.currentLocation,
  forecasts: state.weather.forecasts,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadWeather: () => dispatch(weatherActions.request()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherListScreen)
