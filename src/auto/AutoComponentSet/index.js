import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';
import { AutoLayout as NamedPresenter } from 'zero-element-boot/lib/components';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder';


export default function index(props) {

  const { onItemClick, endpoint } = props;

  const api =endpoint +'/openapi/lc/module/moduleList/1'

  // const api = '/openapi/lc/module/moduleList/1'

  // const api = '/api/AutoComponentSet';


  const [data] = useTokenRequest({ api });
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Flexbox',
      props: {
        direction:'row' 
      },


      cart: 'TestCircularCheckboxIndicator',
    

      container: 'SelectList'
    }
  };



  return (
    <AutoLayout {...config} {...props} onItemClick={onItemClick} >
      <NamedPresenter />
    </AutoLayout>

  )
}