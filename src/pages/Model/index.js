
;
import React, { useState } from 'react';
import {
  ChakraProvider, Flex, Center, Box, Stack, Spacer, VStack, Container, Tabs, TabList, Tab, TabPanels, TabPanel, Button
} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import Loading from 'zero-element-boot/lib/components/loading';
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
import JarItem from './JarItem';
// import config from 'zero-element-boot\lib\components\config'
import layout from './layout';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { setEndpoint, setToken, getEndpoint, getToken } from 'zero-element-boot/lib/components/config/common';
export default function Index (props) {

  const { data = [] } = props;
  const [isShowList, setIsShowList] = useState(true);
  const [isShowData, setIsShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setDetail] = useState('');






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
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)

          // console.log(respData);
        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)

      })


  }











  //
  //处理返回内容
  function handleContent (data) {


    if (typeof data === 'string') {
      return data;
    } if (data instanceof Array && data.length > 0) {
      return (
        <Stack spacing='3px'>
          {
            data.map((item, index) => {
              if (item.indexOf("/*") > -1 || item.indexOf("*") > -1) {
                return <div style={{ whiteSpace: 'pre-wrap' }} key={`${index}_item`}>{item}</div>;
              } else {
                // return  <Container maxW='container.xl' key={index}>{item}</Container>
                if (item.indexOf("BOOT-INF") > -1) {
                  return (
                    <div key={`${index}_item`} onClick={() => getDetailFetch(item, 2)}>
                      <JarItem value={item} />
                    </div>
                  )
                } else {
                  return <Container maxW='container.xl' key={`${index}_item`}>{item}</Container>
                }
              }
            })
          }
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

            <div style={{ minWidth: '1200px', marginTop: '20px' }}>   {
              isShowList ? (
                <AutoLayout {...config} onItemClick={onJarItemClick}>

                </AutoLayout>
              ) : <></>
            }</div>

            {
              isLoading ? (
                <Loading styles={{ marginTop: '60px' }} />
              )
                : isShowData && showDetail ? (
                  <div style={{ width: '100%', paddingLeft: '50px' }}>
                    <Box flex='1'>
                      {showDetail && showDetail.length > 0 ? (
                        <div style={{ background: '#ffffff', width: '100%', paddingTop: '10px' }}>
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


      <Tabs variant='enclosed' align="center">
        <TabList>
          <Tab>One
            <Button style={{ position: 'absolute', top: '200px' }} onClick={() => getName()} >1</Button>
          </Tab>
          <Tab>Two</Tab>
          <Tab>three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

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