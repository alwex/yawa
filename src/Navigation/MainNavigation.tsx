import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../Screens/HomeScreen'
import WeatherListScreen from '../Screens/WeatherListScreen'
import WeatherDetailsScreen from '../Screens/WeatherDetailsScreen'

const MainNavigation = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    WeatherListScreen: { screen: WeatherListScreen },
    WeatherDetailsScreen: { screen: WeatherDetailsScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
  }
)

export default createAppContainer(MainNavigation)
