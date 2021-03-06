import React from 'react'
import { Body, Icon, Left, List, ListItem, Text, View } from 'native-base'
import style from './Styles/WeatherDetailsStyle'
import format from 'date-fns/format'
import toDate from 'date-fns/toDate'
import { translateIcon } from '../Lib/Helpers'

interface WeatherDetailsProps {
  date: string
  iconCode: string
  temp: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  wind: number
  locationName: string
  locationSuffix: string
  description: string
}

export default class WeatherDetails extends React.Component<WeatherDetailsProps> {
  render() {
    const {
      date,
      iconCode,
      description,
      temp,
      temp_max,
      temp_min,
      pressure,
      humidity,
      locationName,
      locationSuffix,
    } = this.props

    const parsedDate = toDate(`${date}Z`)
    const dayOfYear = format(parsedDate, 'dd', { awareOfUnicodeTokens: true })
    const dayOfWeek = format(parsedDate, 'iiii', { awareOfUnicodeTokens: true })
    const time = format(parsedDate, 'p', { awareOfUnicodeTokens: true })

    return (
      <View>
        <View style={style.container}>
          <View style={{ alignItems: 'center' }}>
            <View style={style.locationRow}>
              <Text style={style.location}>{locationName.toUpperCase()}</Text>
              <Text style={style.location}>{locationSuffix.toUpperCase()}</Text>
            </View>
            <Text style={style.dayOfWeek}>
              {dayOfWeek.toUpperCase()} {dayOfYear}
            </Text>
            <Text style={style.time}>{time}</Text>
            <Icon style={style.icon} type="MaterialCommunityIcons" name={translateIcon(iconCode)} />
            <Text style={style.descriptionText}>{description.toUpperCase()}</Text>
            <Text style={style.temp}>{temp}°</Text>
          </View>
        </View>
        <View style={style.dataContainer}>
          <List>
            <ListItem icon>
              <Left>
                <Icon type="MaterialCommunityIcons" name="water" style={style.detailsIcon} />
              </Left>
              <Body style={{ borderColor: 'transparent' }}>
                <Text note style={style.inversed}>
                  {humidity}%
                </Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon
                  type="MaterialCommunityIcons"
                  name="weather-windy"
                  style={style.detailsIcon}
                />
              </Left>
              <Body style={{ borderColor: 'transparent' }}>
                <Text note style={style.inversed}>
                  121 Kmph
                </Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon
                  type="MaterialCommunityIcons"
                  name="temperature-celsius"
                  style={style.detailsIcon}
                />
              </Left>
              <Body style={{ borderColor: 'transparent' }}>
                <Text note style={style.inversed}>
                  Max {temp_max}°
                </Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon
                  type="MaterialCommunityIcons"
                  name="temperature-celsius"
                  style={style.detailsIcon}
                />
              </Left>
              <Body style={{ borderColor: 'transparent' }}>
                <Text note style={style.inversed}>
                  Min {temp_min}°
                </Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon type="MaterialCommunityIcons" name="weight" style={style.detailsIcon} />
              </Left>
              <Body style={{ borderColor: 'transparent' }}>
                <Text note style={style.inversed}>
                  {pressure} Mb
                </Text>
              </Body>
            </ListItem>
          </List>
        </View>
      </View>
    )
  }
}
