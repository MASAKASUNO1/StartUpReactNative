import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Color } from '../../lib/nativebase/theme'

interface SomeProps {
  state: any
  descriptors: any
  navigation: any
}

const BottomTabBar: React.FC<SomeProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#efefef', paddingBottom: insets.bottom }}>
      {state.routes.map((route: { name: string; key: number }, index: number) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: isFocused ? Color['color-primary-500'] : Color['color-basic-500'] }}>{label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export { BottomTabBar }
