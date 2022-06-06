import React from 'react';
import { Box} from "@chakra-ui/react";
import SimpleCart from '@/pages/DomeCart/SimpleCart';

import TitledContainer from '@/pages/DomeCart/TitledContainer'

import OutlineShaowSelector from '@/composition/SelectorCollection/OutlineShaowSelector'
import Select from '@/composition/SelectorCollection/Select'

import { Cart} from 'zero-element-boot/lib/components/cart/';




export default function SelectorCollection(props) {
  

     return (
        <>
 <SimpleCart fill='#F0F4F7' padding='30px'margin='60px' shadow = '0 0px 10px rgba(0, 0, 0, 0.14)'> 
     <Box >
        <SimpleCart padding='0px'margin='30px'>
           <TitledContainer title='RightIconIndicator'   style={{fontWeight:'bold', lineHeight:'30PX'}}>
                <Select />
            </TitledContainer>
        </SimpleCart>

        <SimpleCart padding='0px'margin='30px'>
              <TitledContainer title='SimpleCart'   style={{fontWeight:'bold', lineHeight:'30PX'}}>
                    <OutlineShaowSelector />
            </TitledContainer>
        </SimpleCart>
    </Box>
 </SimpleCart>
        </> 
    )

}

  
