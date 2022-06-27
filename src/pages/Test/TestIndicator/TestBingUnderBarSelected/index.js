import React from 'react'
import BingUnderBarSelected from '@/components/indicator/BingUnderBarSelected'
import Selected from '@/components/indicator/BingUnderBarSelected/Selected'
import Default from '@/components/indicator/BingUnderBarSelected/index'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import { Flex } from '@chakra-ui/react'
import SimpleCart from '@/pages/DomeCart/SimpleCart';
import OverlaySelector  from 'zero-element-boot/lib/components/OverlaySelector'

import ShadowIndicator from 'zero-element-boot/lib/components/indicator/ShadowIndicator';
 
import BingDefault  from '@/components/indicator/BingUnderBarSelected/index'
import BingSelected  from '@/components/indicator/BingUnderBarSelected/Selected'

export default function index(){
    return(
     <Flex>
      
        <SimpleCart width='160px'height='230px' margin='10px'>
            <Selected fill='#000000' size='6px' direction='left'>
                <h1>11</h1>
            </Selected>
        </SimpleCart>
        
        <SimpleCart width='160px'height='230px' margin='10px'>
            <Selected fill='green' size='10px' direction='right'>
                <h1>11</h1>
            </Selected>
        </SimpleCart>

        <SimpleCart width='160px'height='230px'margin='10px'>
            <Selected >
                <h1>11</h1>
            </Selected>
        </SimpleCart>
        <SimpleCart width='160px'height='230px'margin='10px'>
            <Default >
                <h1>11</h1>
            </Default>
        </SimpleCart>

        <SimpleCart width='160px'height='230px'margin='10px'>
              <OverlaySelector defaultIndicator={BingDefault} 
                            hoverIndicator={ShadowIndicator}
                            selectedIndicator={BingSelected}  selected >
                            <ItemPlaceholder size={100}/>
            </OverlaySelector>
        </SimpleCart>

</Flex>
    )
}