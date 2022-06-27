
import React from 'react';
import { ChakraProvider,Center,Flex} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import Presenter from './Presenter';


export default function index (props) {

   
  const { ...rest}=props;

  let api='/api/AutoSelectSet'

  const [data] = useTokenRequest({ api });
    
  /**
   * 页面配置
   */
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Gridbox',
      props: {
        columns: 2
      },
      container: 'SelectList'
    }
   
  };
  
      return (
                  <AutoLayout {...config} data={data} >
                        <Presenter />
                  </AutoLayout>

  )
}