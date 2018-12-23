import React from 'react'
import { View, Text, Icon } from 'native-base'
import style from './Styles/EmptyContentStyle'
import IconType from '../Types/IconType'

interface EmptyContentProps {
  iconName: string
  iconType: IconType
  text: string
}

export default class EmptyContent extends React.Component<EmptyContentProps> {
  render() {
    const { iconType, iconName, text } = this.props
    return (
      <View style={style.container}>
        <View style={style.row}>
          <Icon style={style.icon} name={iconName} type={iconType} />
        </View>
        <View>
          <Text style={style.description}>{text}</Text>
        </View>
      </View>
    )
  }
}
