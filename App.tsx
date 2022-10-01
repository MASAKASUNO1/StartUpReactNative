import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Typography} from './src/components/common/Typography';
import {AppTheme, Color} from './src/lib/nativebase/theme';

const App = () => {
  const backgroundStyle = {};

  return (
    <NativeBaseProvider theme={AppTheme}>
      <SafeAreaView style={backgroundStyle}>
        <Box
          bgColor={Color['color-basic-500']}
          px={2}
          width={100}
          height={100}
          borderRadius={2}
        />
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
    </NativeBaseProvider>
  );
};

export default App;
