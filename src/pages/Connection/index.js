import React, { useState } from 'react';
import { ChakraProvider, Flex, Center, Box, Stack, Spacer, VStack, Container, Button, Input, Select, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
// import AutoLayout from '../AutoLayout';
import Loading from 'zero-element-boot/lib/components/loading';
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
import JarItem from './JarItem';
// import config from 'zero-element-boot\lib\components\config'
import layout from './layout';

// import StandaloneBody from './StandaloneBody';
// import { isDisabled } from '@chakra-ui/react/node_modules/@chakra-ui/utils';


export default function Index (props) {

  const { data = [] } = props;

  const [isShowList, setIsShowList] = useState(true);
  const [isShowData, setIsShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setDetail] = useState('');
  const [currentItemName, setCurrentItemName] = useState('');
  //

  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;

  let api = '/dev/connection';

  if (process.env.NODE_ENV === 'development') {
    api = `${api}`;
  }

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

  // //
  // const getDetailFetch = async (name, num) => {
  //   if (num == 1) {
  //     setCurrentItemName(name)
  //   }
  //   // const api = `http://localhost:8080/api/dev/dependency/decompile`;
  //   setIsShowList(false)
  //   setIsLoading(true)
  //   promiseAjax(api, { pattern: name }, {})
  //     .then(responseData => {
  //       if (responseData && responseData.code === 200) {
  //         let respData = responseData.data;
  //         setDetail(respData);
  //         setIsShowData(true)

  //       } else {
  //         setIsShowList(true)
  //         setIsShowData(false)
  //       }
  //       setIsLoading(false)
  //     })

  // }
  // console.log(statenum);
  var searchData = ''
  // var upDown =''
  //搜索输入框
  const setSearchContent = async (e) => {
    searchData = e
  }

  var upDown = ''
  const setupDown = (N) => {
    upDown = N
  }

  //获取所有表
  function getconnection () {
    let api = '/dev/connection';

    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })
  }

  //显示所有保存的数据库快照文件//下载数据库快照
  function snapshot () {
    let api = '/dev/connection/snapshot';

    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })
  }




  //获取规则
  function getruler () {

    let api = '/dev/connection/snapshot/rulers/mings';

    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })

    // changeInput()
  }


  // 改变规则输入框状态
  var ruleE = ''
  const changeInput = async (e) => {
    ruleE = 1
    if (ruleE == 1) {
      document.getElementById('updataRule').disabled = true
      document.getElementById('updataRule').innerText = '123'
    }

  }


  //根据规则(ruler)保存数据库快照到本地
  function LocalruleStorage () {
    let api = '/dev/connection/snapshot?ruler=mings';

    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })
  }




  //api = http://demo.smallsaas.cn:8087/dev/connection/snapshot/instant?ruler=mings

  //下载数据库快照
  const downFile = () => {
    URL = 'http://demo.smallsaas.cn:8087/dev/connection/snapshot/instant?ruler=mings'
    // api='/dev/connection/snapshot/instant?ruler=ming'
    location.href = URL;
    // console.log(location.href);
  }





















  //搜索方法
  // function seach () {
  //   const body = {
  //     pattern: currentItemName,
  //     filter: searchData,
  //     N: upDown
  //   }
  //   anniu(body)

  // }
  //select//获取value值
  // function getvalue () {
  //   var valuenum = document.getElementById('valueid').value;
  //   alert(valuenum)
  // }



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

  //返回首页
  // function goBack () {
  //   setIsShowList(true)
  //   setIsShowData(false)
  //   setCurrentItemName('')

  // }


  return (
    <ChakraProvider>
      <Flex>
        <Box>
          <VStack spacing='3px'>
            <div style={{ minWidth: '800px', width: '100%', height: '20px', lineHeight: '60px', backgroundColor: '#ffffff', padding: '20px 10px 10px 25px' }}>
              <Stack direction={['column', 'row']} w="100%" spacing='10px'>
                {/* <Button h="35px" colorScheme='blue' onClick={() => goBack()}>首页</Button> */}
                {currentItemName ? (
                  <Button h="35px" colorScheme='blue' onClick={() => getDetailFetch(currentItemName, 1)}>{currentItemName}</Button>
                ) : <></>}
              </Stack>
            </div>



            <div> <Tabs variant='soft-rounded' colorScheme='green' >
              <TabList style={{ position: 'absolute', left: '30% ' }}>
                <Tab onClick={() => getconnection()}>显示所有表</Tab>
                <Tab onClick={() => getruler()}>获取/更新规则</Tab>

                <Tab onClick={() => LocalruleStorage()}>保存数据库快照到本地</Tab>
                <Tab onClick={() => snapshot()}>获取/下载数据库快照</Tab>
                <Tab>snapshot文件</Tab>
                <Tab>规则的配置详情</Tab>
              </TabList>

            </Tabs>
            </div>
            <Input id='updataRule' onBlur={() => changeInput(1)} placeholder='' disabled={false} width={'100px'} />






            {/* <Input placeholder='请输入搜索内容' onChange={(e) => setSearchContent(SearchContent, 2)} /> */}



            {/* <Select placeholder='medium size' size='md' /> */}
            <div style={{ minWidth: '800px', marginTop: '80px' }}>   {
              isShowList ? (
                <AutoLayout {...config} onItemClick={onJarItemClick}>
                  {/* <StandaloneBody  onItemClick={onJarItemClick}/> */}
                </AutoLayout>
              ) : <></>
            }</div>

            {
              isLoading ? (
                <Loading styles={{ marginTop: '60px' }} />
              )
                : isShowData && showDetail ? (
                  <div style={{ width: '100%', paddingLeft: '25px' }}>
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
    </ChakraProvider>
  )
}