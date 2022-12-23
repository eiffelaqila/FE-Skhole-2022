import { useRef, MouseEventHandler } from 'react'
import { useRouter, NextRouter } from 'next/router'
import NextLink from 'next/link'

// Chakra UI 
import { 
    Box, 
    Button, 
    ButtonProps,
    Center, 
    Collapse, 
    Flex, 
    HStack, 
    Heading,
    HeadingProps,
    Icon,
    IconButton,
    Image,
    Link,
    LinkProps,
    Show,
    Slide,
    Spacer,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { 
    ChevronDownIcon, 
    CloseIcon, 
    HamburgerIcon,
    Search2Icon
} from '@chakra-ui/icons'

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
                    fontSize={{ base: 'sm', lg: 'md' }} 
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
    let isLoggedIn = false
    let navLinks = primaryLinks

    const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg='white' boxShadow='0px 16px 32px rgba(0, 0, 0, 0.15)'>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={4}>
                <Center>
                    <NextLink href={'/'} passHref>
                        <Image
                            src={'static/images/logo-skhole-jumantara.svg'}
                            alt={'Skhole Jumantara'}
                            h={10}
                        />
                    </NextLink>
                </Center>
                <HStack spacing={8} alignItems={'center'}>
                    <HStack
                    spacing={{ base: '1', lg: '4' }} 
                    display={{ base: 'none', md: 'flex' }}>
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
                    <Center display={{ md: 'none' }}>
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
                    display={{ md: 'none' }} 
                    top={16} 
                    py={4}
                    w={'100%'}

                    bg="white"
                    borderBottomRadius={"3xl"}
                >
                    <Stack as={'nav'} spacing={4}>
                        {navLinks.map((props) => (
                            <Center 
                                key={props.href}
                                paddingLeft={2}
                            >
                                <LinkText {...props} />
                            </Center>
                        ))}
                    </Stack>
                </Box>
            </Collapse>
        </Box>
    )
}