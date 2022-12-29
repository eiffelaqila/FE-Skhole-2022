import { FormControl } from "@chakra-ui/react";
import React from 'react'
import{Box, Center}from '@chakra-ui/react'

FormControl

export default function Footer () {
    return(
        <div>
            <Box bgColor="#050038" minHeight='7vh' padding={4}>
                <Center color='white'>
                    <p>© Copyright 2022 Skhole ITB Mengajar. All Rights Reserved</p>
                </Center>
            </Box>
            
        </div>
    )
}