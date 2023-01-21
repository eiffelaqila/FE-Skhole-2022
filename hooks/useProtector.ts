import React, { useEffect, useState } from 'react'
import useAuth from './useAuth';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function useProtector() {
    const auth = useAuth();
    const toast = useToast();
    const router = useRouter();
    const [isAuthorized, setAuthorized] = useState(false);

    useEffect(() => {
        statusCheck()
    }, [])

    function statusCheck() {
        const result = auth.authCheck();

        if (result) {
            setAuthorized(true);
            return;
        }
        
        toast({
            title: 'Sesi Habis',
            description: 'Sesi anda habis, silahkan melakukan login kembali',
            position: 'top',
            status: 'info',
        });

        router.push('/login')
        return
    }

    return { isAuthorized }
}

export default useProtector