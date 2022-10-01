import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Typography} from './src/components/common/Typography';

const App = () => {
  const backgroundStyle = {};

  return (
    <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <Box
          bgColor={'#ff0000'}
          px={2}
          width={100}
          height={100}
          borderRadius={2}
        />
        <Typography variant={'h1'}>俺の名前はアナーキー</Typography>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Text>{'aaa'}</Text>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
