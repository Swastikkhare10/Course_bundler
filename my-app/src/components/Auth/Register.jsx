import { Container, Heading, VStack, FormLabel, Input, Box, Button, Avatar} from '@chakra-ui/react'
import React, {useState}  from 'react'
import { Link } from 'react-router-dom'

export const fileUploadCss = {
    cursor:'pointer', marginLeft:'-5%',
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"white",
}

const fileUploadStyle = {
    '&::file-selector-button':fileUploadCss,
}

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [imagePrev, setImagePrev] = useState('')
    const [image, setImage] = useState('');

    const changeImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setImagePrev(reader.result)
            setImage(file)
        }
    }

  return (
    <Container h={'95vh'} >
        <VStack h={'full'} justifyContent={'center'} spacing={'16'} >
            <Heading textTransform={"uppercase"} children={'Register'} />
                <form style={{width:'100%'}}>
                    <Box my={'4'} display={'flex'} justifyContent={'center'} >
                        <Avatar src={imagePrev} size={'2xl'} />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Name' />
                        <Input 
                            required
                            id='name'
                            value={name}
                            onChange={e=> setName(e.target.value)}
                            placeholder='abc'
                            type='text'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='Email Adress' />
                        <Input 
                            required
                            id='email'
                            value={email}
                            onChange={e=> setEmail(e.target.value)}
                            placeholder='abc@gmail.com'
                            type='email'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='password' children='Password' />
                        <Input 
                            required
                            id='password'
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                            placeholder='Enter Your password'
                            type='password'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='chooseAvatar' children='Choose Avatar' />
                        <Input
                        accept='image/*' 
                            required
                            id='password'
                            type='file'
                            focusBorderColor='yellow.500'
                            css={fileUploadStyle}
                            onChange={changeImageHandler}
                        />
                    </Box>

    
                    <Button my={'4'} colorScheme='yellow' type='submit' >
                        Sign Up
                    </Button>

                    <Box my={'4'}>
                        Already Signed Up?{' '}
                        <Link to={'/login'} >
                            <Button colorScheme='yellow' variant={'link'} >
                                Login
                            </Button>{' '}
                            here
                        </Link>
                    </Box>
                </form>
        </VStack>
    </Container>
  )
}

export default Register
