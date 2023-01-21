import { MouseEventHandler, useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import NextLink from 'next/link'

// Chakra UI 
import { 
    Box, 
    Button, 
    Center, 
    Collapse, 
    Flex, 
    HStack, 
    IconButton,
    Image,
    Link,
    LinkProps,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { 
    CloseIcon, 
    HamburgerIcon,
    Search2Icon
} from '@chakra-ui/icons'
import useAuth from '../hooks/useAuth'

type LinkDescription = { 
    label: string, 
    href: string 
}
const primaryLinks: LinkDescription[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Rumah Belajar', href: '/rumah-belajar' },
    { label: 'Rumah Membaca', href: '/rumah-membaca' },
    { label: 'Bingkai Skhole', href: '/bingkai-skhole' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
]

const isRouteMatch = (path: string, router: NextRouter) => path === router.asPath

const ChakraLink: React.FC<LinkProps> = ({ children, href, ...props }) => (
    <Link href={href} as={NextLink} {...props}>
      {children}
    </Link>
  );

function LinkText({ label, href, onClick }: 
    {
    label: string,
    href: string,
    onClick?: MouseEventHandler
    }
) {
    const router = useRouter()

    return (
        <Center 
            as='div'
            h='100%'
        >
            <ChakraLink
                href={ href }
                _hover={{ color: "#0966D9" }}
                color={ isRouteMatch(href, router) ? "#0E2FB2" : "#737090"}
                onClick={ onClick }
            >
                <Text
                    fontSize={{ base: 'sm', xl: 'md' }} 
                    align="center"
                    lineHeight='1.0'
                    fontWeight='700'
                >
                    { label }
                </Text>
            </ChakraLink>
        </Center>
    )
}

export default function Navbar() {
    let navLinks = primaryLinks

    const router = useRouter()
    const { getUsername } = useAuth()
    const [username, setUsername] = useState<string | undefined>(undefined)

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        const uname = getUsername()

        if (!uname) {
            setUsername(undefined)
        } else {
            setUsername(uname)
        }
    }, [getUsername()])

    return (
        <Box position='sticky' top='0' bg='white' boxShadow='0px 16px 32px rgba(0, 0, 0, 0.15)' zIndex='99'>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={{base: '40px', lg: '100px'}}>
                <Center>
                    <NextLink href={'/'} passHref>
                        <Image
                            src={'/static/images/logo-skhole-jumantara.svg'}
                            alt={'Skhole Jumantara'}
                            h={10}
                        />
                    </NextLink>
                </Center>
                <HStack spacing={{ base: '4', xl: '8' }}  alignItems={'center'}>
                    <HStack
                    spacing={{ base: '1', xl: '4' }} 
                    display={{ base: 'none', lg: 'flex' }}>
                    {navLinks.map((props) => (
                        <Center 
                            key={props.href}
                            paddingLeft={2}
                        >
                            <LinkText {...props} />
                        </Center>
                    ))}
                    </HStack>
                    <NextLink href={'/search'} passHref>
                        <Center>
                            <Search2Icon 
                                _hover={{ color: "#0966D9" }}
                                color={ isRouteMatch('/search', router) ? "#0E2FB2" : "#737090"}
                            />
                        </Center>
                    </NextLink>
                    { username ? 
                        <NextLink href={'/logout'} passHref>
                            <Center>
                                <Button bg='#FEE56C' color="#500D7D" rounded={20} fontSize={'sm'}>
                                    { username.toUpperCase() }
                                </Button>
                            </Center>
                        </NextLink>
                    :
                        <NextLink href={'/login'} passHref>
                            <Center>
                                <Button bg='#FEE56C' color="#500D7D" rounded={20} fontSize={'sm'}>
                                    Log In
                                </Button>
                            </Center>
                        </NextLink>
                    }
                    <Center display={{ lg: 'none' }}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Menu'}
                            color="#737090"
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </Center>
                </HStack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Box 
                    display={{ lg: 'none' }} 
                    top={16} 
                    py={4}
                    w={'100%'}

                    bg="white"
                    borderBottomRadius={"3xl"}
                >
                    <Stack as={'nav'} spacing={4}>
                        { navLinks.map((props) => (
                            <Center 
                                key={props.href}
                            >
                                <LinkText {...props} />
                            </Center>
                        ))}
                        { username ? 
                            <NextLink href={'/logout'} passHref>
                                <Center>
                                    <Button bg='#FEE56C' color="#500D7D" rounded={20} fontSize={'sm'}>
                                        { username.toUpperCase() }
                                    </Button>
                                </Center>
                            </NextLink>
                        :
                            <NextLink href={'/login'} passHref>
                                <Center>
                                    <Button bg='#FEE56C' color="#500D7D" rounded={20} fontSize={'sm'}>
                                        Log In
                                    </Button>
                                </Center>
                            </NextLink>
                        }
                    </Stack>
                </Box>
            </Collapse>
        </Box>
    )
}