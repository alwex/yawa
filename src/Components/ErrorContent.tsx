import React from 'react'
import style from './Styles/ErrorStyle'
import { View, Text, Button } from 'native-base'

interface ErrorContentProps {
  onRetry: () => void
}

export default class ErrorContent extends React.Component<ErrorContentProps> {
  render() {
    const { onRetry } = this.props
    return (
      <View style={style.container}>
        <Text style={style.description}>Oups!</Text>
        <View style={style.button}>
          <Button onPress={onRetry}>
            <Text>Retry</Text>
          </Button>
        </View>
      </View>
    )
  }
}
