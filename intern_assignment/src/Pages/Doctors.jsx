import { Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const initialstate = {
    name: "",
    batch: "",
    location: "",
    experience: "",
    contact: ""
  }

const Doctors = () => {
    const [formdata, setFormData] = useState(initialstate)
  const {name, batch, location, experience, contact} = formdata

  const handlechange = (e) => {
    const {name, value } = e.target
    setFormData({...formdata, [name]:value })
  }

  const handlesubmit = () => {
   
    console.log(formdata)
  axios.post("http://localhost:3004/doctors", formdata)
  setFormData(initialstate)
  }


  const [doctor, setDoctor] = useState([])

  

  const url = "http://localhost:3004/doctors"
  const getData = () => {
    axios.get(`${url}`).then((res) => {
      console.log(res.data, "data")
        // const alldata = res.data.doctors
        // /console.log(alldata)
        setDoctor(res.data)
    }).catch((err) => {
        console.log(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])



const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <Box m="auto" bgColor="white">
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
        <Text textAlign="start" fontWeight="500">Doctors</Text>
        <Flex mt="30px" justifyContent="space-between" >
            <Box display="flex" flexDirection="row">
            <p style={{"marginTop":"5px"}}>Show</p>
        <Input w="100px" placeholder="Batch No." bg="white" type="number" ml="5px" mr="5px"/>
        <p style={{"marginTop":"5px"}}>entries</p>
        </Box>
        <Box>
        <Input w="250px" placeholder="Search" bg="white"/>
        <Button w="100px" colorScheme='whatsapp'ml="15px" onClick={onOpen}>Add New</Button>
        </Box>
        </Flex>


        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder='Name' name="name" value={name} onChange={(e) => handlechange(e)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Batch No</FormLabel>
              <Input placeholder='Batch No' name="batch" value={batch} onChange={(e) => handlechange(e)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input placeholder='Location' name="location" value={location} onChange={(e) => handlechange(e)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Experience</FormLabel>
              <Input placeholder='Experience' name="experience" value={experience} onChange={(e) => handlechange(e)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Contact No</FormLabel>
              <Input placeholder='Contact No' name="contact" value={contact} onChange={(e) => handlechange(e)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handlesubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

       
        <TableContainer mt="30px">
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Batch No</Th>
        <Th>Location</Th>
        <Th>Experience</Th>
        <Th>Contact No.</Th>
      </Tr>
    </Thead>
    <Tbody>
    {doctor.map((el) => {
                return (
                  <Tr key={el.id}>
                    <Td>{el.name}</Td>
                    <Td>{el.batch}</Td>
                    <Td>{el.location}</Td>
                    <Td>{el.experience}</Td>
                    <Td>{el.contact}</Td>
                </Tr>
                )
        })
    }
    </Tbody>
  </Table>
</TableContainer>
      </Box>
      </Stack>
    </Box>
  )
}

export default Doctors
