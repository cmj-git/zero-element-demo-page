import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import OnDefaultNewItemIndicator from '@/components/indicator/OnDefaultNewItemIndicator'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import Cart from 'zero-element-boot/lib/components/cart/Cart'

export default function index(){
    return(
        <CssCart borderRadius='6px'  height='30px' margin='20px' overflow= "auto" >
            <OnDefaultNewItemIndicator color='#0f83f0'  solid   >
                <div style ={{fontWeight:'bold' }}>
                TagIndicator
                </div>
            </OnDefaultNewItemIndicator>
        </CssCart>
    )
}