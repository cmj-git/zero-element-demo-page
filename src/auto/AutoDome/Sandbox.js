import React from 'react';
import AutoComponentSet from './index';
import CssCart from 'zero-element-boot/lib/components/Cart/CssCart';
import WxPage from '@/components/WxPage'
import { ChakraProvider } from '@chakra-ui/react'
import Button from '@/components/presenter/button/Button'
import VStack from 'zero-element-boot/lib/components/layout/VStack';




export default function (props) {


    let endpoint = 'http://app1.console.smallsaas.cn:8001'





    const onHandleItemClick = (item) => {
        console.log(item, ' ======== item')
    }

    return (
        <ChakraProvider>
            <WxPage >
                     <>
                       <CssCart padding='10px'  height='90%' width='100%'  backgroundColor='#ffffff'   >
                            <AutoComponentSet onItemClick={onHandleItemClick} endpoint={endpoint} />
                        </CssCart>

                        <div style={{ width: '100%',height:'', padding: '1px 50px ', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1) ' ,margin:'10px 0 0 0' , backgroundColor:'#ffffff'}}>
                            <Button add solid color='#0b82d1'>
                            <div style={{ fontSize: '16px', margin:'6px'}}>新增安装地址</div>
                            </Button>
                        </div>
                    </>
            </WxPage>
        </ChakraProvider>

    )

}