
import React from 'react';
import { ChakraProvider,Center,Flex} from "@chakra-ui/react";
import AutoLayout from 'zero-element-boot/lib/components/AutoLayout';

export default function Index (props) {

  const { data = [] } = props;

  /**
   * 页面配置
   */
  const config = {
    items: data.length > 0 ? data : [],
    layout:{
      xname: 'Gridbox',
      props: {
        columns: 2
      },
      
      container: 'PlainList',
      
      presenter: 'TestAutoLayout'
      
    },
    allComponents:[]
  };

  return (
    <ChakraProvider>
       <Center bg='#f4f3f2'>
               <AutoLayout {...config} />
        </Center>
    </ChakraProvider>

  )
}