import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
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

    const { cart } = props

    const { cname } = cart

    return (

  <NamedSelector defaultIndicator={RightIconIndicatorDefault} 
  defaultIndicatorProps={{padding:'40px'}}
        hoverIndicator={RightIconIndicatorHover}
        hoverIndicatorProps={defaultHoverStyles={padding:'40px'}}
        selectedIndicator={RightIconIndicatorSelected} 
        selectedIndicatorProps={defaultSelectedStyles={padding:'40px'}} selected  > 
        <Flex>
            <Cart  margin='20px' linewidth='0'> 
              <TitledContainer title={cname}  style={{textIndent:'1em',margin:'0'}} >
                    <TitledContainer title={cart.xname}  style={{textIndent:'1em',margin:'0',fontWeight:'bold'}} >
                        <NamedCart cart={cart}>
                            <ItemPlaceholder/>
                        </NamedCart>
                    </TitledContainer>
                </TitledContainer>
           </Cart> 
         </Flex>
</NamedSelector>

    )
}