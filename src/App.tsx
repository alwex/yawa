import React, { Component } from 'react'
import { Root } from 'native-base'
import MainNavigation from './Navigation/MainNavigation'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <MainNavigation />
      </Root>
    )
  }
}
