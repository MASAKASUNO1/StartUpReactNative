import { Box, Button } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Typography } from '../components/common/Typography'
import { useGlobalUI } from '../contexts/globalui'

interface IndexProps {}

const Test: React.FC<IndexProps> = ({}) => {
  return (
    <SafeAreaView>
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
  )
}

export { Test }
