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

function SearchCard({
    id_matpel,
    nama_matpel,
    kelas
}: {
    id_matpel: string,
    nama_matpel: string,
    kelas: string,
}) {
    return (
        <>
            <a href={`/rumahbelajar/${id_matpel}`}>
                <Flex 
                top="20%"
                right="50%px" 
                justifyContent={'flex-start'} 
                flexDirection='column' 
                height={{base: '60px', md: '100px'}} 
                width={{base: '400px', md: '600px'}} 
                paddingTop={5}
                bg="white"
                rounded={10}
                gap = {{base: 2, md: 5}}
                >
                    <Flex flexDirection='column' gap={{base: 0, md: 2}} alignItems={{base: 'flex-start', md: 'flex-start'}} paddingLeft={{base: 0, md: 2}}>
                        <Flex display={{base: 'none', md: 'undefined'}}>
                            <Image src='static/images/Line.svg'/>
                        </Flex>
                        <Text textAlign={{base: 'center', md: 'left'}} fontSize={{base: '12px', md: '16px'}} color={'#500D7D'}>
                           <b> {nama_matpel} </b> <br/> <span style={{color:"#000000"}}>Kelas {kelas}</span>
                        </Text>
                    </Flex>
                </Flex>
            </a>
        </>
    )

}
export default SearchCard