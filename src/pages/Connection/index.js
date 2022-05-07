import React, { useState } from 'react';
import {
  ChakraProvider, Flex, Center, Box, Stack, Spacer, VStack, Container, Button, Input, Select, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Switch, Spinner, Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  sm, closeOnEsc

} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
// import AutoLayout from '../AutoLayout';
import Loading from 'zero-element-boot/lib/components/loading';
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
import JarItem from './JarItem';
// import config from 'zero-element-boot\lib\components\config'
import layout from './layout';

import { setEndpoint, setToken, getEndpoint } from 'zero-element-boot/lib/components/config/common';

export default function Index (props) {

  if (process.env.NODE_ENV == 'development') {
    setEndpoint('http://demo.smallsaas.cn:8001');
  }

  const { data = [] } = props;

  const [isShowList, setIsShowList] = useState(true);
  const [isShowData, setIsShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setDetail] = useState('');
  const [currentItemName, setCurrentItemName] = useState('');
  const [switchStatus, setSwitchStatus] = useState(false)
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
          // console.log(respData);
        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })

    //隐藏规则输入框
    document.getElementById('updataRule').hidden = true
    document.getElementById('downBase').hidden = true
    document.getElementById('saveLocal').hidden = true

  }

  //获取数据库快照
  function snapshotGet () {
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

    //隐藏规则输入框
    document.getElementById('updataRule').hidden = true
    document.getElementById('downBase').hidden = true
    document.getElementById('saveLocal').hidden = true
  }


  //下载数据库快照
  function downData () {
    downFileanniu(content)
  }
  //文本信息
  var content = ''
  const downFile = (n) => {
    content = n
  }

  //下载按钮--
  function downFileanniu (content) {
    let api = `/dev/connection/snapshot/instant?ruler=` + content;

    const w = window.open('about:blank');
    w.location.href = 'http://demo.smallsaas.cn:8001' + api


  }



  //获取规则

  // 用于控制输入框的显示与隐藏

  function getRuler () {

    let api = '/dev/connection/snapshot/rulers/';

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


    document.getElementById('saveLocal').hidden = false
    document.getElementById('updataRule').hidden = false
    document.getElementById('downBase').hidden = false
  }

  //新建规则，更新规则 
  function updataName () {
    anniu(content)
  }


  //文本信息
  var content = ''
  const setcontent = (n) => {
    content = n
  }

  //搜索按钮--获取返回的数据 //新建、更新方法
  function anniu (content) {
    let api = '/dev/connection/snapshot/rulers/' + content;
    console.log(api);

    promiseAjax(api, {}, { method: 'POST' })
      .then(responseData => {
        {
          if (responseData && responseData.code === 200) {
            let respData = responseData.data;
            // console.log(respData);
            setDetail(respData);
            setIsShowData(true)

          } else {
            setIsShowList(true)
            setIsShowData(false)
          }
          setIsLoading(false)
        }
      })


  }


  //根据规则(ruler)保存数据库快照到服务器

  //保存快照到服务器

  function SaveData () {
    LocalruleStorage(content)
  }
  //文本信息
  var content = ''
  const saveBaseData = (n) => {
    content = n
  }

  //保存数据库快照方法
  function LocalruleStorage (content) {
    let api = '/dev/connection/snapshot?ruler=' + content;
    console.log(api, {}, { method: 'POST' });

    promiseAjax(api)
      .then(responseData => {
        {
          if (responseData && responseData.code === 200) {
            let respData = responseData.data;
            // console.log(respData);
            setDetail(respData);
            setIsShowData(true)

          } else {
            setIsShowList(true)
            setIsShowData(false)
          }
          setIsLoading(false)
        }
      })


  }

  function printData () {
    printWay(content)
  }
  //文本信息
  var content = ''
  const printBaseData = (n) => {
    content = n
  }

  //保存数据库快照方法
  function printWay (content) {
    let api = '/dev/connection/snapshot/print?ruler=' + content;
    console.log(api);

    promiseAjax(api)
      .then(responseData => {
        {
          if (responseData && responseData.code === 200) {
            let respData = responseData.data;
            // console.log(respData);
            setDetail(respData);
            setIsShowData(true)

          } else {
            setIsShowList(true)
            setIsShowData(false)
          }
          setIsLoading(false)
        }
      })


  }







  function goBack () {
    setIsShowList(true)
    setIsShowData(false)
    setCurrentItemName('')

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
                <Tab onClick={() => getRuler()}>获取/更新规则</Tab>
                <Tab onClick={() => snapshotGet()}>获取数据库快照</Tab>
                <Tab>snapshot文件</Tab>
                <Tab>规则的配置详情</Tab>
              </TabList>

            </Tabs>
            </div>


            <div id='updataRule' hidden={true} style={{ position: 'absolute', top: '100px', left: '650px' }}><Input size={'sm'} placeholder='规则已存在就更新替换内容，不存在即新建' width={'350px'} onBlur={(N) => setcontent(N.target.value)} />
              {/* <Button margin='20px ' colorScheme='blue' onClick={() => anniu()}>确定</Button> */}


              <div>    <Popover>
                <PopoverTrigger>
                  <Button>更新/新建</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Header</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button id='anniuID' colorScheme='blue' onClick={() => updataName()}>确定</Button>
                    </PopoverBody>
                    <PopoverFooter>文件已存在就更新替换内容，不存在就新建，确定吗？</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
              </div>
            </div>
            {/* 下载数据库快照-输入框 */}
            <div id='downBase' hidden={true} style={{ position: 'absolute', top: '300px', left: '650px' }}><Input size={'sm'} placeholder='根据规则名下载数据库快照' width={'350px'} onBlur={(N) => downFile(N.target.value)} />
              <div>  <Popover>
                <PopoverTrigger>
                  <Button>下载</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Header</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button id='anniuID' colorScheme='blue' onClick={() => downData()}>确定</Button>
                    </PopoverBody>
                    <PopoverFooter>确定吗？</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
              </div>
            </div>

            {/* 根据规则(ruler)保存数据库快照到服务器本地-输入框 */}
            <div id='saveLocal' hidden={true} style={{ position: 'absolute', top: '500px', left: '650px' }}><Input size={'sm'} placeholder='根据规则名保存数据库快照到服务器本地' width={'350px'} onBlur={(N) => saveBaseData(N.target.value)} />
              <div>  <Popover>
                <PopoverTrigger>
                  <Button>保存</Button>
                </PopoverTrigger>
                <Portal >
                  <PopoverContent  >
                    <PopoverArrow />
                    <PopoverHeader>Header</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button colorScheme='blue' onClick={() => SaveData()}>确定</Button>
                    </PopoverBody>
                    <PopoverFooter>确定吗？</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
              </div>
            </div>


            {/* 页面输出当前的数据库快照内容-输入框 */}
            <div id='printBase' style={{ position: 'absolute', top: '700px', left: '650px' }}><Input size={'sm'} placeholder='输出当前的数据库快照内容' width={'350px'} onBlur={(N) => printBaseData(N.target.value)} />
              <div>  <Popover>
                <PopoverTrigger>
                  <Button>输出</Button>
                </PopoverTrigger>
                <Portal >
                  <PopoverContent  >
                    <PopoverArrow />
                    <PopoverHeader>Header</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button colorScheme='blue' onClick={() => printData()}>确定</Button>
                    </PopoverBody>
                    <PopoverFooter>确定吗？</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
              </div>
            </div>




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