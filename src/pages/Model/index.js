import React, { useState } from 'react';
import {
  ChakraProvider, Flex, Center, Box, Stack, Spacer, VStack, Container, Tabs, TabList, Tab, TabPanels, TabPanel, Button, Checkbox
} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import Loading from 'zero-element-boot/lib/components/loading';
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
import JarItem from './JarItem';
// import config from 'zero-element-boot\lib\components\config'

import layout from './layout';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { setEndpoint, setToken, getEndpoint, getToken } from 'zero-element-boot/lib/components/config/common';
import { get } from 'lodash';
export default function Index (props) {

  const { data = [] } = props;
  const [isShowList, setIsShowList] = useState(true);
  const [isShowData, setIsShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setDetail] = useState('');
  const [getdata, setdata] = useState('')




  //items数组
  const items = []



  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;

  if (layoutJsonPath) {
    layoutData = { path: layoutJsonPath };
  } else {
    layoutData = localLayoutJson;
  }

  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutData
  };

  const onJarItemClick = (item) => {
    console.log(item, ' === item')
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    let name = item.value;
    // if(name.indexOf('/') > -1){
    //     const list = name.split('/');
    //     name = list[list.length-1]
    // }

    if (name.indexOf('@') > -1) {
      const list = name.split('@');
      name = list[0]
    }
    setDetail([])
    getDetailFetch(name, 1)
  }

  function getName () {
    let api = `/api/crud/fieldModel/fieldModels`;

    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code
          === 200) {
          let respData = responseData.data.records;
          setDetail(respData);
          console.log(respData);
          setIsShowData(true)

          // console.log(respData);
        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)

      })


  }



  function getId (N) {
    items.push({ fieldModelId: N })
    console.log(items);

  }




  //搜索按钮--获取返回的数据 更新方法
  function newEntityModel () {
    let api = `/api/crud/api_model/apiTableModel/apiTableModels`;

    //字符串转化成JSON

    let itemsArr = JSON.parse(items)
    console.log(data);
    promiseAjax(api, itemsArr, { method: 'POST' })
      .then(responseData => {
        {
          if (responseData && responseData.code === 200) {
            let respdata = responseData.data;

            setDetail(respdata);
            setIsShowData(true)
            setSwitchStatus(false)

            setRulercontent(respdata)
            console.log(respdata);


          } else {
            setIsShowList(true)
            setIsShowData(false)

          }
          setIsLoading(false)
        }
      })


  }






  //
  //处理返回内容
  function handleContent (data) {
    if (data instanceof Array && data.length > 0) {
      return (
        <Stack spacing='3px'>
          <div >
            <Flex align='center'>
              {
                data.map((item, index) => (

                  <div style={{ width: '100px', height: '100px', backgroundColor: 'pink', margin: '10px', }} key={index}>
                    <a href="#">{item.modelLabel}</a>
                    <a href="#">{item.modelName}</a>
                    {/* 复选框 */}
                    <Checkbox onChange={() => getId(item.id)}></Checkbox>
                  </div>
                ))
              }
            </Flex>
          </div>
        </Stack>
      )
    } else {
      return '';
    }

  }



  return (

    <ChakraProvider>
      <Flex>
        <Box>
          <VStack spacing='3px'>

            {
              isLoading ? (
                <Loading styles={{ marginTop: '60px' }} />
              )
                : isShowData && showDetail ? (
                  <div>
                    <Box flex='1'>
                      {showDetail && showDetail.length > 0 ? (
                        <div style={{ background: '#ffffff', }}>
                          {handleContent(showDetail)}
                        </div>
                      ) : null}
                    </Box>
                  </div>
                ) : <></>
            }
          </VStack>

        </Box>

      </Flex>


      <Button style={{ position: 'absolute', top: '200px', left: '300px' }} onClick={() => getName()} >输出</Button>
      <Button style={{ position: 'absolute', top: '200px', left: '400px' }} onClick={() => newEntityModel()} >新建实体</Button>

    </ChakraProvider>



    //   <ChakraProvider>
    //   <Flex>
    //     <Box>
    //       <VStack spacing='3px'>

    //         <div style={{ minWidth: '1200px', marginTop: '80px' }}>   {
    //           isShowList ? (
    //             <AutoLayout {...config} onItemClick={onJarItemClick}>
    //               {/* <StandaloneBody  onItemClick={onJarItemClick}/> */}
    //             </AutoLayout>
    //           ) : <></>
    //         }</div>

    //         {
    //           isLoading ? (
    //             <Loading styles={{ marginTop: '60px' }} />
    //           )
    //             : isShowData && showDetail ? (
    //               <div style={{ width: '100%', paddingLeft: '50px' }}>
    //                 <Box flex='1'>
    //                   {showDetail && showDetail.length > 0 ? (
    //                     <div style={{ background: '#ffffff', width: '100%', paddingTop: '10px' }}>
    //                       {handleContent(showDetail)}
    //                     </div>
    //                   ) : null}
    //                 </Box>
    //               </div>
    //             ) : <></>
    //         }
    //       </VStack>

    //     </Box>

    //   </Flex>

    //   {/* <div style={{ whiteSpace: 'pre-wrap' }} >{showsetcontent}</div> */}
    // </ChakraProvider>



  )
}