import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Typography } from './src/components/common/Typography'
import { GlobalUIProvider } from './src/contexts/globalui'
import { AppTheme } from './src/lib/nativebase/theme'
import { Index } from './src/page'

const App = () => {
  return (
    <NativeBaseProvider theme={AppTheme}>
      <GlobalUIProvider>
        <SafeAreaView>
          <Index />
          <Typography variant={'h1'}>あいうえお</Typography>
          <Typography variant={'h2'}>あいうえお</Typography>
          <Typography variant={'h3'}>あいうえお</Typography>
          <Typography variant={'h4'}>あいうえお</Typography>
          <Typography variant={'h5'}>あいうえお</Typography>
          <Typography variant={'h6'}>あいうえお</Typography>
          <Typography variant={'subtitle1'}>あいうえお</Typography>
          <Typography variant={'subtitle2'}>あいうえお</Typography>
          <Typography variant={'body1'}>あいうえお</Typography>
          <Typography variant={'body2'}>あいうえお</Typography>
          <Typography variant={'caption'}>あいうえお</Typography>
        </SafeAreaView>
      </GlobalUIProvider>
    </NativeBaseProvider>
  )
}

export default App
