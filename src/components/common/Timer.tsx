import { Box, Text, TextProps } from '@chakra-ui/react'
import type { NextComponentType, NextPageContext } from 'next'

export type TProps = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  isMobile: boolean;
}

const Wrapper: NextComponentType = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="100%"
  >
    {children}
  </Box>
)

const Label: NextComponentType<NextPageContext, {}> = (props: any) => {
  const fontsize = props.fontSize;
  return (
  <Text
    fontFamily={{ sm: '\'neon\',Helvetica,Arial,Lucida,sans-serif;', lg: '\'Press Start 2P\'' }}
      fontSize={fontsize ? fontsize : { sm: '11px', lg: '8px' }}
    color={{ sm: 'brand.400', lg: 'white' }}
    {...props}
  >
      {props.children}
  </Text>
)
}
const Value: NextComponentType<NextPageContext, {}, TextProps> = (props) => (
  <Label fontSize={24} {...props}>
    {props.children}
  </Label>
)

const Separator: NextComponentType<NextPageContext, {}, TextProps> = (props) => (
  <Value width={{ sm: '25px', lg: 'auto' }}>
    {props.children}
  </Value>
)

const getTimeWithZero = (time: number) => {
  return time < 10 ? `0${time}` : time
}

const Timer: NextComponentType<NextPageContext, {}, TProps> = ({
  seconds,
  minutes,
  hours,
  days,
  isMobile,
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    mt="20px"
  >
    {/* <Wrapper>
      <Value>{getTimeWithZero(days)}</Value>
      <Label>Day{isMobile ? '' : '(s)'}</Label>
    </Wrapper>
    <Separator>{isMobile ? ' ' : ':'}</Separator>
    <Wrapper>
      <Value>{getTimeWithZero(hours)}</Value>
      <Label>{isMobile ? 'Hrs' : 'Hour(s)'}</Label>
    </Wrapper>
    <Separator>{isMobile ? ' ' : ':'}</Separator>
    <Wrapper>
      <Value>{getTimeWithZero(minutes)}</Value>
      <Label>{isMobile ? 'Min' : 'Minute(s)'}</Label>
    </Wrapper>
    <Separator>{isMobile ? ' ' : ':'}</Separator>
    <Wrapper>
      <Value>{getTimeWithZero(seconds)}</Value>
      <Label>{isMobile ? 'Sec' : 'Second(s)'}</Label>
    </Wrapper> */}
    <Wrapper>
      <Value>ENDED</Value>
      {/* <Label>Inprogress</Label> */}
    </Wrapper>
  </Box>
)

export default Timer
