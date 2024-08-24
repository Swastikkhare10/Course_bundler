import React, { useState } from 'react'
import {Button, Container, HStack, Heading, Input, Text, Stack, VStack, Image, Link} from '@chakra-ui/react'

const Course = ({views, title, imageSrc, id, addToPlayListHandler, creator, 
    description, lectureCount})=>{
    return(
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
            <Heading textAlign={["center", 'left']} 
            maxW={"200px"} 
            size={"sm"}
            fontFamily={"sans-serif"}
            noOfLines={3}
            children={title}
            />

            <HStack>
                <Text
                fontWeight={'bold'}
                textTransform={"uppercase"}
                children={'Creator'} 
                />

                <Text
                fontFamily={'body'}
                textTransform={"uppercase"}
                children={creator} 
                />
            </HStack>

            <Heading textAlign={"center"} size={"xs"} 
            children={`Lectures - ${lectureCount}`} />

            <Stack direction={['column', 'row']} alignItems={'center'} >
                <Link to={`/course/${id}`} >
                    <Button colorScheme='yellow' >Watch Now</Button>
                </Link>
                <Button 
                    variant={"ghost"} 
                    colorScheme='yellow'
                    onClick={()=> addToPlayListHandler(id)}
                >Add to Playlist</Button>
            </Stack>
            
        </VStack>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    const addToPlayListHandler = ()=>{
        console.log("Added to Playlist")
    }

    const categories = [
        'WebDev',
        'AI',
        'DataStructure and Algorithm',
        'Data Science',
        'Game Development',
    ]

  return (
    <Container minH={"95vh"} maxW={"container.lg"} padding={"8"} >
        <Heading children="All Courses" m={"8"} />
        <Input value={keyword} 
            onChange={e=> setKeyword(e.target.value)} 
            placeholder='Search a Course...'
            type='text'
            focusBorderColor='yellow.500'
        />
        <HStack overflowX={"auto"} paddingY={'8'} >
            {
            categories.map((item, index)=>(
                <Button key={index} onClick={()=> setCategory(item)} minW={'60'}>
                    <Text children={item} />
                </Button>
            ))
            }
        </HStack>

        <Stack
            direction={['column', 'row']}
            flexWrap={'wrap'}
            justifyContent={['flex-start', 'space-evenly']}
            alignItems={['center', 'flex-start']}
        >

            <Course 
                id={'sample'}
                title={"sample"}
                description={"sample"}
                views={23}
                imageSrc={'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg'}
                creator={"sample"}
                lectureCount={2}
                addToPlayListHandler={addToPlayListHandler}
            />
 
        </Stack>
    </Container>
  )
}

export default Courses
