import type { NextComponentType } from 'next'
import { Box, keyframes } from '@chakra-ui/react'

const ldsBall = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, 100px);
    transform: translate(0, 100px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
`

const Loader: NextComponentType = () => {
  const ldsBallAnimation = `${ldsBall} infinite 1s linear`

  return (
    <Box position="fixed" w="100vw" h="100vh" bg="#121826" zIndex={100}>
      <Box
        position="absolute"
        width="30px"
        height="30px"
        borderRadius="50%"
        background="#bda449"
        left="50%"
        top="40%"
        transform="translateX(-50%)"
        animation={ldsBallAnimation}
      />
    </Box>
  )
}

export default Loader
