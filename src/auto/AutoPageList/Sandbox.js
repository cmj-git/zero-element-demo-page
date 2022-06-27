import React, { useState, useEffect } from 'react';
import { ChakraProvider} from "@chakra-ui/react";
import WxPage from '@/components/WxPage'
import AutoPageList from './index';


export default function (props) {

    // let endpoint='http://app1.console.smallsaas.cn:8001/openapi'

    const onHandleItemClick = (item) => {
        console.log(item, ' === item')
    }
    
    return (
        <ChakraProvider>
            <WxPage>
                <AutoPageList />
            </WxPage>
        </ChakraProvider>
    )
}