import { Alert, Box, Center, CloseIcon, HStack, IconButton, VStack } from 'native-base'
import React from 'react'
import { Typography } from '../components/common/Typography'

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
  const [snackTitle, setSnackTitle] = React.useState('Hey')
  const [snackSeverity, setSnackSeverity] = React.useState<'success' | 'error' | 'info' | 'warning'>('success')

  const openSnackBarSuccess = (title: string, subtitle: string) => {
    console.log('==success=')
    setSnackTitle(title)
    setSnackSeverity('success')
    setIsOpenSnackbar(true)
  }

  const openSnackBarInfo = (title: string, subtitle: string) => {
    setSnackTitle(title)
    setSnackSeverity('info')
    setIsOpenSnackbar(true)
  }

  const openSnackBarError = (title: string, subtitle: string) => {
    setSnackTitle(title)
    setSnackSeverity('error')
    setIsOpenSnackbar(true)
  }

  const openSnackBarWarning = (title: string, subtitle: string) => {
    setSnackTitle(title)
    setSnackSeverity('warning')
    setIsOpenSnackbar(true)
  }

  const closeSnackBar = () => {
    setIsOpenSnackbar(false)
  }

  React.useEffect(() => {
    console.log('===', snackTitle)
  }, [snackTitle])

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
        <Center>
          <Alert maxW="400" status={snackSeverity} colorScheme={snackSeverity}>
            <VStack space={2} flexShrink={1} w="100%">
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
              <Box
                pl="6"
                _text={{
                  color: 'coolGray.600',
                }}>
                We are happy to announce that we are going live on July 28th. Get ready!
              </Box>
            </VStack>
          </Alert>
        </Center>
      )}
    </GlobalUIContext.Provider>
  )
}

const useGlobalUI = () => React.useContext(GlobalUIContext)

export { GlobalUIProvider, useGlobalUI }
