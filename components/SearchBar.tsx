import { SearchIcon } from '@chakra-ui/icons';
import {
    Container,
    Center,
    Stack,
    Input,
    InputRightAddon,
    IconButton,
    InputGroup,
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchBar() {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        // Not Empty
        if (search !== '') {
            router.push({ pathname: '/search', query: { query: search } });
        }
    }

    return (
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
    )
}