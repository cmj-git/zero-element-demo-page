
import React from 'react';
import { ChakraProvider,Center,Flex} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import layout from './layout';
// import Presenter from './Presenter';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import Presenter from './Presenter';


export default function Index (props) {

    // let api ='/api/DomeCartListData'
    let api ='http://app1.console.smallsaas.cn:8001/openapi/lc/components/cart'


    const [data] = useTokenRequest({ api });

  /**
   * 页面配置
   */
  const config = {
    items: data.length > 0 ? data : [],
    layout: layout

  };

  return (
    <ChakraProvider>
       <Center bg='#ffffff'>
               <AutoLayout {...config} data={data}>
                    <Presenter />
               </AutoLayout>
        </Center>
    </ChakraProvider>

  )
}