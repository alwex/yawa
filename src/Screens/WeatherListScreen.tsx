import React from 'react'
import { connect } from 'react-redux'
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Left,
  Right,
  Subtitle,
  Text,
  Title,
} from 'native-base'
import { NavigationScreenProps } from 'react-navigation'
import Location from '../Types/Location'
import { AppState } from '../Redux'

interface WeatherListScreenProps extends NavigationScreenProps {
  location?: Location
}

class WeatherListScreen extends React.Component<WeatherListScreenProps> {
  renderWeatherFor(location: Location) {
    const { navigation } = this.props
    return (
      <>
        <Header>
          <Left />
          <Body>
            <Title>Forecasts</Title>
            <Subtitle>{location.name}</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>lat: {location.lat}</Text>
          <Text>long: {location.lon}</Text>
          <Button onPress={() => navigation.goBack()}>
            <Text>Go back</Text>
          </Button>
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
})

export default connect(mapStateToProps)(WeatherListScreen)
