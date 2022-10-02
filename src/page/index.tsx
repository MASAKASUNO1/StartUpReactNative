import { Box, Button } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Typography } from '../components/common/Typography'
import { useGlobalUI } from '../contexts/globalui'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const { openSnackBarSuccess, openSnackBarError } = useGlobalUI()

  return (
    <SafeAreaView>
      <Typography>axaxax</Typography>
      <Button
        onPress={() => {
          openSnackBarSuccess('保存に成功しました')
        }}>
        あああ
      </Button>
    </SafeAreaView>
  )
}

export { Index }
