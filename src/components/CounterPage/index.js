import React from 'react';
import { AutoLayout } from 'zero-element-boot';
import Presenter from './Presenter';


// setToken('eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJvcmdJZCI6MzEsInVzZXJJZCI6Mjk4LCJhY2NvdW50IjoiNTc0ZTY2N2VlODEyNDI1OTlhMzZkOWU3YzJmMGJlYWEiLCJkb21haW5Vc2VySWQiOiIiLCJpYXQiOjE2NTU4MDI5NzMsImp0aSI6IjI5OCIsInN1YiI6IjU3NGU2NjdlZTgxMjQyNTk5YTM2ZDllN2MyZjBiZWFhIiwiZXhwIjoxNjU2MDYyMTczfQ.4Y6dFdtTyqVplkxFiKBylQkisOgkFvmU0Ahi2eTEvLeeZF2UDBeqnZ3t9cIuaYDeAomwfG_q-Zy_h-pEwV8QLw')


export default function index(props) {

  
  const { productList,callBackData } = props;
  

//   // let api = '/api/AutoDomeData'

// //   const api =endpoint +'/api/u/asset/user/userAsset'

//   const api = '/api/pub/product/products?category=Food '



//   const [data] = useTokenRequest({ api });

// console.log(data,'== data')
  /**
   * 页面配置
   */

  const config = {
    items: productList,
    layout: {
      xname: 'Gridbox',
      props: {
        columns: 1
      },
      container: 'PlainList'
    },
    ...props
  };

  return (
    <AutoLayout {...config} >
      <Presenter callBackData={callBackData}/>
    </AutoLayout>

  )
}