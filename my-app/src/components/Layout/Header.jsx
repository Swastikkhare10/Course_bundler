import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri'
import {ColorModeSwitcher} from '../../../src/ColorModeSwitcher'
import { Link } from 'react-router-dom'

 
const LinkButton = ({url = '/', title = 'Home', onClose})=> (
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"}>{title}</Button>
  </Link>
)

const Header = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const isAuthenticated=true;
  const user = {
    role :"admin",
  }
  const logoutHandler = ()=>{
    console.log('Logout');
    onClose();
  }

  return (
    <>
      <ColorModeSwitcher />

      <Button
      onClick={onOpen}
      colorScheme='yellow' width={'12'} height={'12'} rounded={'full'} zIndex={"overlay"} >
        <RiMenu5Fill />
      </Button>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
            <DrawerHeader>
                CourseBundler
            </DrawerHeader>
            <DrawerBody>
                <VStack spacing={'4'} alignItems={'flex-start'}>
                  <LinkButton onClose={onClose} url="/" title="Home" />
                  <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
                  <LinkButton onClose={onClose} url="/request" title="Request a Course" />
                  <LinkButton onClose={onClose} url="/contact" title="Contact" />
                  <LinkButton onClose={onClose} url="/about" title="About" />

                  <HStack 
                  justifyContent={"space-evenly"} 
                  position={"absolute"} 
                  bottom={"2rem"} 
                  width={"80%"}>

                    {isAuthenticated?(
                      <>
                        <VStack>
                          <HStack>
                            <Link onClick={onClose} to={"/profile"}>
                              <Button variant={"ghost"} colorScheme='yellow'>Profile</Button>
                            </Link>

                            <Button variant={"ghost"} onClick={logoutHandler} >
                              <RiLogoutBoxLine />
                              Logout
                            </Button>

                          </HStack>
                          {
                            user && user.role=="admin" && <Link onClick={onClose} to="/admin/dashboard">
                              <Button colorScheme='purple' variant={"ghost"} >
                                <RiDashboardFill style={{margin : '4px'}} />
                                Dashboard
                              </Button>
                            </Link>
                          }
                        </VStack>
                      </>):(
                      <>
                        <Link to={"/login"}>
                          <Button colorScheme='yellow'>Login</Button>
                        </Link>

                        <p>OR</p>

                        <Link to={"/signup"}>
                          <Button colorScheme='yellow'>Sign Up</Button>
                        </Link>
                      </>
                    )}

                  </HStack>
                </VStack>
            </DrawerBody>
        </DrawerContent>
      </Drawer>

    </>
  )
}

export default Header
