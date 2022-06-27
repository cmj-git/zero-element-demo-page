import React from 'react';
import PageCart from '@/components/PageCart';
import HCenter from '@/components/HCenter';
import CounterPage from '@/components/CounterPage/Sandbox';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import WxPage from '@/components/WxPage'
import { Radio, RadioGroup, Button, Flex, Stack, ChakraProvider } from '@chakra-ui/react'


export default function index(props) {
    return (
        <ChakraProvider>
            <HCenter>
                <WxPage>
                    {/* <CssCart backgroundColor='#f4f5f7' width='100%' height='100%' overflow='hidden' > */}
                        {/* <CssCart backgroundColor='#f4f5f7' width='100%' height='' > */}
                            <CounterPage />
                        {/* </CssCart> */}
                    {/* </CssCart> */}
                </WxPage>

            </HCenter>
        </ChakraProvider>
    )
}