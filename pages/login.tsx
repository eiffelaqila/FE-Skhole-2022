import React, { SyntheticEvent, useEffect, useState } from 'react'
import {
    Box, Image, Stack, Flex, Heading, Text, Select, Center, useToast, FormControl, FormLabel, Input, Button, VStack
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router';

import Footer from '../layout/Footer'
import useAuth from '../hooks/useAuth'
     
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleLogin = async (e: SyntheticEvent) => {
        try {
            setLoading(true);
            e.preventDefault();
            await login({
                username: username,
                password: password
            })
            
            setLoading(false);
            router.push('/');
        } catch (err) {
            setLoading(false);
            throw err;
        }
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Center 
                position="relative" 
                minHeight="100vh" 
                bgColor="#373360" 
                transform="auto"
                css={`
                    background: url(static/images/noise.png), #200655;
                    background-repeat: repeat;
                `}
            >
                <VStack align={'center'} gap={'10'}>
                    <Heading fontSize={'4xl'} color={'white'}>Log in to your account</Heading>
                    <Box
                        rounded={'lg'}
                        bg={'white'}
                        boxShadow={'lg'}
                        p={8}
                        w={'60vw'}
                        maxW={'40rem'}
                    >
                        <form onSubmit={handleLogin}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Username</FormLabel>
                                    <Input 
                                        type={'text'}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </FormControl>
                                
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input 
                                        type={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </FormControl>
                                
                                <Stack spacing={10}>
                                    <Button
                                        type={'submit'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{bg: 'blue.500'}}
                                    >
                                        { loading ? 
                                            <Center>
                                                <Image src="static/images/loading.svg" w={'6'}/>
                                            </Center>
                                        :
                                            <Center>Log in</Center>
                                        }
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </VStack>
            </Center>
            <Footer/> 
        </>
    )
}