import React from 'react'
import { ActivityIndicator } from 'react-native'
import { secondaryColor } from '../Theme/Variables'
import { View } from 'native-base'
import style from './Styles/LoaderStyle'

export default class Loader extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color={secondaryColor} />
      </View>
    )
  }
}
