import { Flex } from '@mantine/core'
import React from 'react'
import Quote from '../components/quote'
import Thinker from '../components/thinker'

export default function QuoteSection() {
  return (
    <Flex
    mih={50}
    bg="rgba(0, 0, 0, .3)"
    gap="md"
    justify="center"
    align="center"
    direction="column"
    wrap="wrap"
  >
    <Quote/>
    <Thinker/>
  </Flex>
  )
}
