import { Alert, Box, CloseIcon, IconButton } from 'native-base'
import React from 'react'
import { Typography } from '../components/common/Typography'
import { Color } from '../lib/nativebase/theme'

const GlobalUIContext = React.createContext<{
  openSnackBarSuccess(title: string, subtitle: string): void
  openSnackBarError(title: string, subtitle: string): void
  openSnackBarInfo(title: string, subtitle: string): void
  openSnackBarWarning(title: string, subtitle: string): void
  closeSnackBar(): void
}>({
  openSnackBarSuccess: () => {},
  openSnackBarError: () => {},
  openSnackBarInfo: () => {},
  openSnackBarWarning: () => {},
  closeSnackBar: () => {},
})

interface GlobalUIProviderProps {
  children: React.ReactNode
}

const GlobalUIProvider: React.FC<GlobalUIProviderProps> = ({ children }) => {
  const [isOpenSnackbar, setIsOpenSnackbar] = React.useState(false)
  const [snackTitle, setSnackTitle] = React.useState('title')
  const [snackSubtitle, setSnackSubtitle] = React.useState<string>()
  const [snackSeverity, setSnackSeverity] = React.useState<'success' | 'error' | 'info' | 'warning'>('success')

  const openSnackBarSuccess = (title: string, subtitle: string) => {
    setSnackTitle(title)
    setSnackSubtitle(subtitle)
    setSnackSeverity('success')
    setIsOpenSnackbar(true)
  }

  const openSnackBarInfo = (title: string, subtitle: string) => {
    setSnackTitle(title)
    setSnackSubtitle(subtitle)
    setSnackSeverity('info')
    setIsOpenSnackbar(true)
  }

  const openSnackBarError = (title: string, subtitle: string) => {
    setSnackTitle(title)
    setSnackSubtitle(subtitle)
    setSnackSeverity('error')
    setIsOpenSnackbar(true)
  }

  const openSnackBarWarning = (title: string, subtitle: string) => {
    setSnackTitle(title)
    setSnackSubtitle(subtitle)
    setSnackSeverity('warning')
    setIsOpenSnackbar(true)
  }

  const closeSnackBar = () => {
    setIsOpenSnackbar(false)
  }

  return (
    <GlobalUIContext.Provider
      value={{
        openSnackBarSuccess,
        openSnackBarError,
        openSnackBarInfo,
        openSnackBarWarning,
        closeSnackBar,
      }}>
      {children}
      {isOpenSnackbar && (
        <Alert
          status={snackSeverity}
          colorScheme={snackSeverity}
          style={{ position: 'absolute', bottom: 120, left: 16, right: 16 }}>
          <Box width={'100%'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
            <Box width={'100%'} display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'}>
              <Alert.Icon size={5} />
              <Box mr={2} />
              <Typography style={{ display: 'flex', flex: 1 }} fontSize="md" fontWeight="medium" color="coolGray.800">
                {snackTitle}
              </Typography>
              <Box mr={2} />
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: 'coolGray.600',
                }}
              />
            </Box>
            {snackSubtitle && (
              <Box width={'100%'} display={'flex'} flexDir={'row'} pl={6} pr={1.5}>
                <Typography style={{ color: Color['color-basic-700'] }}>{snackSubtitle}</Typography>
              </Box>
            )}
          </Box>
          {/* <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack flexShrink={1} space={2} alignItems="center">
                  <Alert.Icon />
                  <Typography fontSize="md" fontWeight="medium" color="coolGray.800">
                    {snackTitle}
                  </Typography>
                </HStack>
                <IconButton
                  variant="unstyled"
                  _focus={{
                    borderWidth: 0,
                  }}
                  icon={<CloseIcon size="3" />}
                  _icon={{
                    color: 'coolGray.600',
                  }}
                />
              </HStack>

            </VStack> */}
        </Alert>
      )}
    </GlobalUIContext.Provider>
  )
}

const useGlobalUI = () => React.useContext(GlobalUIContext)

export { GlobalUIProvider, useGlobalUI }

// <Center
// style={{
//   position: 'absolute',
//   bottom: 120,
// }}>
// <Alert maxW="400" status={snackSeverity} colorScheme={snackSeverity}>
//   <VStack space={2} flexShrink={1} w="100%">
//     <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
//       <HStack flexShrink={1} space={2} alignItems="center">
//         <Alert.Icon />
//         <Typography fontSize="md" fontWeight="medium" color="coolGray.800">
//           {snackTitle}
//         </Typography>
//       </HStack>
//       <IconButton
//         variant="unstyled"
//         _focus={{
//           borderWidth: 0,
//         }}
//         icon={<CloseIcon size="3" />}
//         _icon={{
//           color: 'coolGray.600',
//         }}
//       />
//     </HStack>
//     {/* <Box
//       pl="1"
//       _text={{
//         color: 'coolGray.600',
//       }}>
//       We are happy to announce that we are going live on July 28th. Get ready!
//     </Box> */}
//   </VStack>
// </Alert>
// </Center>
