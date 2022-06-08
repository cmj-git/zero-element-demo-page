
import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import HoverShadowCart from 'zero-element-boot/lib/components/cart/HoverShadowCart';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
// import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center } from '@chakra-ui/react'
import TitledContainer from 'zero-element-boot/lib/components/container/TitledContainer'

import RightIconIndicatorDefault from '@/pages/DomeCart/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/pages/DomeCart/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/pages/DomeCart/RightIconIndicatorSelected';
import NamedSelector from '@/pages/DomeCart/NamedSelector'

/**
 * 
 * @returns 
 */


export default function index(props) {



    return (

        <Flex>
            <Cart  margin='20px' linewidth='0'> 
                <NamedCart  cart='Cart'  
                            indicator={{xname:'HoverShadowCart'  ,props: {linewidth:'0',margin:'0',padding:'0',shadow :'0 0px 10px rgba(0, 0, 0, 0.15)'}}}
                            selector={{xname:'Rectangle'  ,props: {linewidth:'0',margin:'0',padding:'0'}}}
                            // defaultIndicator ='Cart'  >
                            defaultIndicator ={{xname:'Cart'  ,props: {linewidth:'0',margin:'0',padding:'0'}}}>
                    <ItemPlaceholder/>
                </NamedCart>
           </Cart> 
         </Flex>
    )
}