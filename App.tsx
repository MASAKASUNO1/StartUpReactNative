import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Typography } from './src/components/common/Typography'
import { GlobalUIProvider } from './src/contexts/globalui'
import { AppTheme } from './src/lib/nativebase/theme'
import { Index } from './src/page'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Test } from './src/page/test'

const Stack = createStackNavigator()
const TabBar = createBottomTabNavigator()

const App = () => {
  const routeNameRef = React.useRef<any>()
  const navigationRef = React.useRef<any>()

  return (
    <NativeBaseProvider theme={AppTheme}>
      <GlobalUIProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.current.getCurrentRoute().name
          }}
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current
            const currentRouteName = navigationRef.current.getCurrentRoute().name
            // if (previousRouteName !== currentRouteName) {
            //   await analytics().logScreenView({
            //     screen_name: currentRouteName,
            //     screen_class: currentRouteName,
            //   })
            // }
            routeNameRef.current = currentRouteName
          }}>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Tab" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalUIProvider>
    </NativeBaseProvider>
  )
}

const TabNavigator = () => (
  <TabBar.Navigator screenOptions={{ headerShown: false }}>
    <TabBar.Screen name="Index" component={Index} />
    <TabBar.Screen name="Test" component={Test} />
  </TabBar.Navigator>
)

//MARK: - BOTTOM TAB BAR DESIGN
interface BottomTabBar {
  navigation: any
  state: any
}

export default App
