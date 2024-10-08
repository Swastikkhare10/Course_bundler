import { Box, Stack, VStack, Heading, HStack} from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular, TiSocialInstagramCircular} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'} >
      <Stack direction={['column', 'row']} >
        <VStack alignItems={['center', 'flex-start']} width={'full'} >
          <Heading children="All Rights Reserverd" color={'white'} />
          <Heading fontFamily={'body'} size={'sm'} children="Swastik Khare" color={'yellow.400'} />
        </VStack>

        <HStack 
        spacing={['2', '10']} 
        justifyContent={"center"}
        color={'white'}
        fontSize={'50'}
        >
          <a href='' target='blank'>
            <TiSocialYoutubeCircular />
          </a>
          <a href='' target='blank'>
            <TiSocialInstagramCircular />
          </a>
          <a href='' target='blank'>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Footer
 