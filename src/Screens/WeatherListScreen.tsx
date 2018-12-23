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
  Title,
} from 'native-base'
import { NavigationScreenProps } from 'react-navigation'
import Location from '../Types/Location'
import { AppState } from '../Redux'
import { Dispatch } from 'redux'
import { weatherActions } from '../Redux/WeatherRedux'
import WeatherData from '../Types/WeatherData'
import WeatherList from '../Components/WeatherList'
import Loader from '../Components/Loader'
import ErrorContent from '../Components/ErrorContent'
import { uiActions } from '../Redux/UIRedux'
import { primaryColor } from '../Theme/Variables'
import CancellablePromise from '../Types/react-native-addons/CancellablePromise'
import { InteractionManager } from 'react-native'

interface WeatherListScreenProps extends NavigationScreenProps {
  location?: Location
  forecasts: WeatherData[]
  loadWeather: () => void
  selectForecast: (forecast: WeatherData) => void
  fetching: boolean
  error: boolean
}

class WeatherListScreen extends React.Component<WeatherListScreenProps> {
  loadWeatherHandle: CancellablePromise | undefined

  componentDidMount(): void {
    this.loadWeatherHandle = InteractionManager.runAfterInteractions(() => this.props.loadWeather())
  }

  componentWillUnmount(): void {
    if (this.loadWeatherHandle !== undefined) {
      this.loadWeatherHandle.cancel()
    }
  }

  renderWeatherFor(location: Location) {
    const { navigation, forecasts, selectForecast } = this.props
    return (
      <Content>
        <WeatherList
          onPress={(forecast: WeatherData) => {
            selectForecast(forecast)
            navigation.navigate('WeatherDetailsScreen')
          }}
          location={location}
          forecasts={forecasts}
        />
      </Content>
    )
  }

  render() {
    const { navigation, location, fetching, error } = this.props

    let content = null
    if (fetching) {
      content = <Loader />
    } else if (error) {
      content = <ErrorContent onRetry={() => this.props.loadWeather()} />
    } else if (location) {
      content = this.renderWeatherFor(location)
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: primaryColor }} />
            </Button>
          </Left>
          <Body>
            <Title>Forecasts</Title>
            <Subtitle>{location ? location.name : ''}</Subtitle>
          </Body>
          <Right />
        </Header>
        {content}
      </Container>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.ui.currentLocation,
  forecasts: state.weather.forecasts,
  fetching: state.weather.fetching,
  error: state.weather.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadWeather: () => dispatch(weatherActions.request()),
  selectForecast: (forecast: WeatherData) => dispatch(uiActions.selectCurrentForecast(forecast)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherListScreen)
