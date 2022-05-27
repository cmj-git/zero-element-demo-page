import React from 'react';
import { Flex ,Text} from "@chakra-ui/react";
import NamedCartItemPlaceholder from '@/pages/NamedCartItemPlaceholder';



/**
 *
 * 
 * @returns 
 */
 

export default function TitleNamedCartIPH(props) {

    return (
         <Flex> 
             <NamedCartItemPlaceholder  {...props}/>
              {/* <Text>111{props.cart}</Text> */}
         </Flex>
    )
}

//[x: string]: any;
// children: any;
// xname: any;
// indicator: any;
// selector: any;
// defaultIndicator: any;
// props: any;
// cart?: {
//     xname: any;
//     props: any;


