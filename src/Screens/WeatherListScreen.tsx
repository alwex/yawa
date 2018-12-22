import React from 'react'
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

interface WeatherListScreenProps extends NavigationScreenProps {}

class WeatherListScreen extends React.Component<WeatherListScreenProps> {
  render() {
    const { navigation } = this.props
    const location: Location = navigation.getParam('location') as Location
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Forecasts</Title>
            <Subtitle>{location.name}</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button onPress={() => navigation.goBack()}>
            <Text>Go back</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default WeatherListScreen
