import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiUser } from "react-icons/bi";
import { Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom"
//import Sidebar from './Sidebar';


const Dashboard = () => {
  return (
    <Box m="auto" bgColor="#FFFAF0">
        <Stack w="90%" m="auto" display="flex"flexDirection="row">
      <Box w="20%" h="748px" color="white" bg="whatsapp.500">
        <VStack>
            <Heading mb="30px">NAAVA</Heading>
            <Text>Dashboard</Text>
            <Text>Approvals</Text>
            <Text>Contact Us</Text>
            <Text>Members</Text>
        </VStack>
      </Box>
      {/* <Sidebar/> */}
      <Box w="80%" p="30px">
        <Text textAlign="start" fontWeight="500">Dashboard</Text>
        <Flex mt="30px" justifyContent="space-between" bg="white">
        <Input w="250px" placeholder="Batch No."/>
        <Input w="250px" placeholder="Name"/>
        <Input w="250px" placeholder="Designation"/>
        <Button w="250px" colorScheme='whatsapp'>Search</Button>
        </Flex>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mt="50px">
            <GridItem borderRadius="10px" bg="white" border="1px solid RGBA(0, 0, 0, 0.06)">
                <Flex>
                <Box alignContent="center" p="25px" w="80px" m="10px" borderRadius="10px" bg="whatsapp.50">
                <BiUser size="30px" color='green'/>
                </Box>
                <Box mt="20px" textAlign="start">
                <Text color="green" fontSize="20px" fontWeight="bold">1000+</Text>
                <Text>Total Registered Students</Text>
                </Box>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" bg="white" border="1px solid RGBA(0, 0, 0, 0.06)">
                <Flex>
                <Box alignContent="center" p="25px" w="80px" m="10px" borderRadius="10px" bg="whatsapp.50">
                <BiUser size="30px" color='green'/>
                </Box>
                <Box mt="20px" textAlign="start">
                <Text color="green" fontSize="20px" fontWeight="bold">6</Text>
                <Text>Request Pending</Text>
                </Box>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" bg="white" border="1px solid RGBA(0, 0, 0, 0.06)">
                <Flex>
                <Box alignContent="center" p="25px" w="80px" m="10px" borderRadius="10px" bg="whatsapp.50">
                <BiUser size="30px" color='green'/>
                </Box>
                <Box mt="20px" textAlign="start">
                <Text color="green" fontSize="20px" fontWeight="bold">500+</Text>
                <Text>CA</Text>
                </Box>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" bg="white" border="1px solid RGBA(0, 0, 0, 0.06)">
                <Flex>
                <Box alignContent="center" p="25px" w="80px" m="10px" borderRadius="10px" bg="whatsapp.50">
                <BiUser size="30px" color='green'/>
                </Box>
                <Box mt="20px" textAlign="start">
                <Text color="green" fontSize="20px" fontWeight="bold">500+</Text>
                <Text>Lawyers</Text>
                </Box>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" bg="white" border="1px solid RGBA(0, 0, 0, 0.06)">
                <Flex>
                <Box alignContent="center" p="25px" w="80px" m="10px" borderRadius="10px" bg="whatsapp.50">
                <BiUser size="30px" color='green'/>
                </Box>
                <Box mt="20px" textAlign="start">
                <Text color="green" fontSize="20px" fontWeight="bold">100+</Text>
                <Text>Doctors</Text>
                </Box>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" bg="white" border="1px solid RGBA(0, 0, 0, 0.06)">
                <Flex>
                <Box alignContent="center" p="25px" w="80px" m="10px" borderRadius="10px" bg="whatsapp.50">
                <BiUser size="30px" color='green'/>
                </Box>
                {/* <Routes>
                  <Route> */}
                  <Link to="/doctors">
                  <Box mt="20px" textAlign="start">
                <Text color="green" fontSize="20px" fontWeight="bold">100+</Text>
                <Text>Doctors</Text>
                </Box>
                </Link>
                {/* </Route>
                </Routes> */}
                </Flex>
            </GridItem>
        </Grid>
      </Box>
      </Stack>
    </Box>
  )
}

export default Dashboard
