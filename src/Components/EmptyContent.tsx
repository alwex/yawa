import React from 'react'
import { View, Text, H1 } from 'native-base'

interface EmptyContentProps {
  icon: JSX.Element
  text: string
}

export default class EmptyContent extends React.Component<EmptyContentProps> {
  render() {
    const { icon, text } = this.props
    return (
      <View>
        <View>{icon}</View>
        <View>
          <H1>{text}</H1>
        </View>
      </View>
    )
  }
}
