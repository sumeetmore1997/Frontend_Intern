import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <Box>
       <Box w="20%" h="748px" color="white" bg="whatsapp.500">
        <VStack>
            <Heading mb="30px">NAAVA</Heading>
            <Text>Dashboard</Text>
            <Text>Approvals</Text>
            <Text>Contact Us</Text>
            <Text>Members</Text>
        </VStack>
      </Box>
    </Box>
  )
}

export default Sidebar
