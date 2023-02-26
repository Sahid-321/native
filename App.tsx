import { View, Text } from 'react-native'
import React from 'react'
import AllScreens from './src/components/AllScreens'
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
   <NavigationContainer>
    <AllScreens/>
   </NavigationContainer>
  )
}