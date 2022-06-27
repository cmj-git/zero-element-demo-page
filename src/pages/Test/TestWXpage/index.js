import React from 'react'
import WxPage from '@/components/WxPage'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import { ChakraProvider } from '@chakra-ui/react'

export default function index(){
    return(
        <ChakraProvider>
            <WxPage>
                <ItemPlaceholder />
            </WxPage>
       </ChakraProvider>
    )
}