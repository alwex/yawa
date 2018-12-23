import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Badge, Icon, Text, View } from 'native-base'
import toDate from 'date-fns/toDate'
import format from 'date-fns/format'
import style from './Styles/WeatherItemStyle'
import { translateIcon } from '../Lib/Helpers'

interface WeatherItemProps {
  onPress: () => void
  date: string
  temp: number
  humidity: number
  description: string
  iconCode: string
  locationName: string
}

export default class WeatherItem extends React.Component<WeatherItemProps> {
  render() {
    const { date, temp, description, iconCode, locationName, humidity, onPress } = this.props
    const parsedDate = toDate(date)
    const dayOfYear = format(parsedDate, 'dd', { awareOfUnicodeTokens: true })
    const dayOfWeek = format(parsedDate, 'iii', { awareOfUnicodeTokens: true })
    const time = format(parsedDate, 'p', { awareOfUnicodeTokens: true })
    return (
      <TouchableOpacity style={style.container} onPress={onPress}>
        <View style={style.mainRow}>
          <View>
            <View>
              <Text style={style.temp}>{temp}°</Text>
            </View>
            <View>
              <Text style={style.description}>{description.toUpperCase()}</Text>
            </View>
            <View>
              <Text style={style.status}>{locationName.toUpperCase()}</Text>
            </View>
          </View>
          <View>
            <Icon style={style.icon} type="MaterialCommunityIcons" name={translateIcon(iconCode)} />
          </View>
          <View>
            <View>
              <Badge style={style.humidityBadge}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="water"
                  style={style.humidityBadgeContent}
                />
                <Text>{humidity}%</Text>
              </Badge>
            </View>
            <View>
              <Text style={style.dayOfYear}>{dayOfYear}</Text>
              <Text style={style.dayOfWeek}>{dayOfWeek.toUpperCase()}</Text>
              <Text style={style.time}>{time}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
