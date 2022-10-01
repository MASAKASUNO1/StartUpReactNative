import {Box, Button} from 'native-base';
import React from 'react';
import {Typography} from '../components/common/Typography';
import {useGlobalUI} from '../contexts/globalui';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const {openSnackBarSuccess} = useGlobalUI();

  return (
    <Box>
      <Typography>axaxax</Typography>
      <Button
        onPress={() => {
          openSnackBarSuccess('a', 'b');
        }}>
        あああ
      </Button>
    </Box>
  );
};

export {Index};
