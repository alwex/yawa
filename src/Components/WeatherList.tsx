import React from 'react'
import WeatherData from '../Types/WeatherData'
import { List, ListItem } from 'native-base'
import WeatherItem from './WeatherItem'
import Location from '../Types/Location'

interface WeatherListProps {
  onPress: (forecast: WeatherData) => void
  forecasts: WeatherData[]
  location: Location
}

export default class WeatherList extends React.Component<WeatherListProps> {
  render() {
    const { forecasts, location, onPress } = this.props
    return (
      <List>
        {forecasts.map((forecast: WeatherData) => (
          <ListItem key={forecast.dt}>
            <WeatherItem
              onPress={() => onPress(forecast)}
              date={forecast.dt_txt}
              temp={parseInt(forecast.main.temp.toFixed(0))}
              humidity={forecast.main.humidity}
              description={forecast.weather[0].description}
              iconCode={forecast.weather[0].icon}
              locationName={location.name}
            />
          </ListItem>
        ))}
      </List>
    )
  }
}
