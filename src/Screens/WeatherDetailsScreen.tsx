import React from 'react'
import { connect } from 'react-redux'
import Location from '../Types/Location'
import WeatherData from '../Types/WeatherData'
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
import { AppState } from '../Redux'
import Loader from '../Components/Loader'
import WeatherDetails from '../Components/WeatherDetails'

interface WeatherDetailsScreenProps extends NavigationScreenProps {
  location?: Location
  forecast?: WeatherData
}

class WeatherDetailsScreen extends React.Component<WeatherDetailsScreenProps> {
  renderDetails(location: Location, forecast: WeatherData) {
    const { navigation } = this.props
    return (
      <>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Details</Title>
            <Subtitle>{location.name}</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <WeatherDetails
            date={forecast.dt_txt}
            iconCode={forecast.weather[0].icon}
            temp={forecast.main.temp}
            temp_min={forecast.main.temp_min}
            temp_max={forecast.main.temp_max}
            pressure={forecast.main.pressure}
            humidity={forecast.main.humidity}
            wind={forecast.wind.speed}
            locationName={location.name}
            locationSuffix={location.name_suffix}
            description={forecast.weather[0].description}
          />
        </Content>
      </>
    )
  }

  render() {
    const { location, forecast } = this.props

    let content = <Loader />
    if (location && forecast) {
      content = this.renderDetails(location, forecast)
    }

    return <Container>{content}</Container>
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.ui.currentLocation,
  forecast: state.ui.currentForecast,
})

export default connect(mapStateToProps)(WeatherDetailsScreen)
