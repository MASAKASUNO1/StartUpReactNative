import { Box, Button } from 'native-base'
import React from 'react'
import { Typography } from '../components/common/Typography'
import { useGlobalUI } from '../contexts/globalui'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const { openSnackBarSuccess, openSnackBarError } = useGlobalUI()

  return (
    <Box>
      <Typography>axaxax</Typography>
      <Button
        onPress={() => {
          openSnackBarSuccess('保存に成功しました', 'b')
        }}>
        あああ
      </Button>
    </Box>
  )
}

export { Index }
