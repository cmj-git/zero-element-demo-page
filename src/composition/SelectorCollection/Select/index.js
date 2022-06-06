import React from 'react';
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedSelector from '@/pages/DomeCart/NamedSelector'
import { ChakraProvider,Center,Flex,Box} from "@chakra-ui/react";

import RightIconIndicatorDefault from '@/pages/DomeCart/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/pages/DomeCart/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/pages/DomeCart/RightIconIndicatorSelected';





export default function index(props) {
  

     return (
        <>
                <NamedSelector defaultIndicator={RightIconIndicatorDefault} 
                            hoverIndicator={RightIconIndicatorHover}
                            selectedIndicator={RightIconIndicatorSelected} selected  > 
                        <ItemPlaceholder />
                </NamedSelector>   

     
        </> 
    )

}

  



