import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    Flex,
    Input,
    InputRightAddon,
    IconButton,
    InputGroup,
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Jumbotron() {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        // Not Empty
        if (search !== '') {
            router.push({ pathname: '/search', query: { query: search } });
        }
    }

    return (
        <>
            <Center
                position='relative' 
                overflow='hidden'
                height='40vh' 
                
                borderBottomRadius={50} 
                mx='auto'
                css={`
                    background: url(static/images/noise.png), linear-gradient(180deg, #050038 0%, #0E2FB2 100%);
                    background-repeat: repeat;
                `}
            >

                {/* Text */}
                <Flex 
                    zIndex="10" 
                    direction="column" 
                    align="center"
                >
                    <Heading fontSize={{base: '36px', sm:'52px', md: '64px', lg: '80px'}} color="white">
                        Hai, <span style={{color:"#FEE56C"}}>Skholeans!</span>
                    </Heading>
                    <Text color="white">
                        Mari berjelajah di dunia skholeverse
                    </Text>
                </Flex>

                {/* Decoration */}
                <Box 
                    position="absolute" 
                    minWidth="400%" 
                    minHeight="50%" 
                    bottom="-30%" 
                    transform="auto"
                    rotate="-15deg" 
                    
                    bgGradient="linear-gradient(180deg, #ECB6E7 0%, rgba(236, 182, 231, 0) 100%)" 
                    mixBlendMode="lighten"
                    opacity="0.2" 
                />
                <Image 
                    src="static/images/neptune.svg" 
                    position="absolute" 
                    width={{base:"300px", md: "50%"}} 
                    maxWidth="500px"
                    top="15vh"
                    left="-100" 
                />
                <Image 
                    src="static/images/moon.svg" 
                    position="absolute" 
                    width={{base:"40px", md: "5%"}} 
                    maxWidth="50px"
                    top="20%" 
                    right="10%" 
                />
            </Center>
            <Center>
                <Container position="absolute" bg="white" p="0" borderRadius="xl">
                    <Stack direction="row" gap="2">
                        <InputGroup>
                            <Input
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Mau belajar apa hari ini?"
                                borderRadius="xl"
                            />
                            <InputRightAddon>
                                <IconButton aria-label="Search" icon={<SearchIcon />} onClick={handleSearch}/>
                            </InputRightAddon>
                        </InputGroup>
                    </Stack>
                </Container>
            </Center>
        </>
    )
}