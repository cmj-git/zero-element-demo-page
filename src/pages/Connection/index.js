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
  Portal, Grid, HStack,
  sm, closeOnEsc, Textarea, Tooltip

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
  const [switchStatus, setSwitchStatus] = useState(true)
  const [showsetcontent, setmycontent] = useState('')
  const [showybutton, setmybutton] = useState(false)
  const [showRulercontent, setRulercontent] = useState('')

  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;



  //用于下载
  if (process.env.NODE_ENV === 'development') {
    URL = `http://demo.smallsaas.cn:8001`;
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
          setmybutton(false)
          // console.log(respData);
        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })



  }
  //获取数据库快照
  function getBaseSt () {
    let api = '/dev/connection/snapshot';
    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)
          setmybutton(false)
          // console.log(respData);
        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })


  }


  //下载按钮--
  function downFileanniu (content) {
    let api = `/dev/connection/snapshot/instant?ruler=${content}`
    const w = window.open('about:blank');
    w.location.href = URL + api
    console.log(api);
    setSwitchStatus(false)
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
          setmybutton(true)
        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })

  }

  var getRulerWay = function getRuler () {

    let api = '/dev/connection/snapshot/rulers/';

    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)
          setmybutton(true)
        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })

  }


  //新建规则，更新规则 
  function updataName () {
    anniu(content, condata)
    getRulerWay()
  }
  //文本信息
  var content = ''
  const setcontent = (n) => {
    content = n
  }
  var condata = ''
  const setcondata = (m) => {
    condata = m
  }

  //搜索按钮--获取返回的数据 //新建、更新方法
  function anniu (content, condata) {
    let api = `/dev/connection/snapshot/rulers/${content}?`
    //字符串转化成JSON
    console.log(content);
    let a = JSON.parse(condata)
    promiseAjax(api, a, { method: 'POST' })
      .then(responseData => {
        {
          if (responseData && responseData.code === 200) {
            let respdata = responseData.data;
            console.log(respdata);

            setDetail(respdata);
            setIsShowData(true)
            setSwitchStatus(false)
            setRulercontent(respdata)

            alert('更新成功！')

          } else {
            setIsShowList(true)

            setIsShowData(false)
          }
          setIsLoading(false)
        }
      })


  }

  //


  //根据规则(ruler)保存数据库快照到服务器本地

  //方法
  function LocalruleStorage (content) {
    let api = '/dev/connection/snapshot?ruler=' + content;
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






  //根据规则(ruler)页面输出当前的数据库快照内容
  //方法
  function printDataWay (content) {
    let api = '/dev/connection/snapshot/print/json?ruler=' + content;
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          console.log(respData);
          setDetail(respData);
          setIsShowData(true)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })



  }







  //查看具体的命名规则的配置详情
  //方法
  function RulerDeployWay (content) {
    let api = '/dev/connection/snapshot/rulers/json/' + content;
    console.log(api);

    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          // respData = respData.replace(/[\'\\\\/\b\f\n\r\t]/g, '');
          // let respDataJSON = JSON.stringify(respData)
          // setDetail(respData);
          setDetail(respData)

          console.log(respData);
          setIsShowData(true)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })

  }



  //根据规则名删除规则
  function deleteDatatWay (content) {
    let api = '/dev/connection/snapshot/rulers/' + content;
    promiseAjax(api, {}, { method: 'DELETE' })
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



  // //下载snapshot文件
  function printdataBaseSWay (content) {
    let api = `/dev/connection/snapshot/dl?&pattern=${content}`
    const w = window.open('about:blank');
    w.location.href = URL + api
  }



  //规则名删除规则方法
  function deleteBase (content) {
    let api = '/dev/connection/snapshot/' + content;
    console.log(api);

    promiseAjax(api, {}, { method: 'DELETE' })
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






  //获取images接口文件列表
  function getImages () {
    let api = '/dev/connection/images?';
    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true)
          setmybutton(false)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })




  }


  function getshow (item) {

    let api = '/dev/connection/schema?pattern=' + item;

    setIsShowList(false)
    setIsLoading(true)
    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {

          let respData = responseData.data;
          JSON.parse(respData)
          setDetail(respData);
          setIsShowData(true)

        } else {
          setIsShowList(true)
          setIsShowData(false)
        }
        setIsLoading(false)
      })

  }


  function getRulerContent (name) {

    let api = '/dev/connection/snapshot/rulers/json/' + name;
    console.log(api);

    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let resData = responseData.data;
          setRulercontent(resData)
          console.log(resData);

        }
      })

  }




  // function over () {
  //   var Blk = document.getElementById('outbutton');
  //   Blk.style.display = "block";
  // }

  //
  //处理返回内容
  function handleContent (data) {
    // console.log(data);
    if (typeof data === 'string') {
      return data;
    }
    if (data instanceof Array && data.length > 0) {
      return (
        <Stack spacing='3px'>
          {
            data.map((item, index) => {
              if (item.indexOf(".sql") > -1) {

                // onMouseMove={out()}
                return <div key={`${index}_item`} >
                  <a href='#'>{item}</a>
                  <Button size={'xs'} colorScheme={'blue'} left='6px' onClick={() => printdataBaseSWay(item)}>下载</Button>
                  <Button size={'xs'} colorScheme={'red'} left='10px' onClick={() => deleteBase(item)}>删除</Button>
                </div>;

              } else {
                if (item.indexOf("ruler") > -1) {
                  return (
                    <div key={`${index}_item`} >

                      {/* <JarItem value={item} /> */}

                      <Tooltip label='查看该规则的配置详情' placement='top'>
                        <div style={{ position: 'absolute', left: '20px' }}><a href="#" onClick={() => RulerDeployWay(item)}>{item}</a></div>
                      </Tooltip>

                      <Box style={{ position: 'relative', left: '150px' }}>
                        <Flex>
                          <Popover>
                            <PopoverTrigger>
                              {/* <Tooltip label='更新规则内容' placement='top'> */}
                              <Button size={'xs'} colorScheme={'blue'} left='6px' onClick={() => getRulerContent(item)}>更新规则</Button>
                              {/* </Tooltip> */}
                            </PopoverTrigger>
                            <Portal>
                              <PopoverContent left={'500px'}>
                                <PopoverArrow />
                                <PopoverHeader>更新规则内容</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                  <Input placeholder='规则名' onMouseOut={(N) => setcontent(N.target.value)} defaultValue={item} />
                                  <Textarea marginTop={'10px'} height={'200px'} onMouseOut={(N) => setcondata(N.target.value)} defaultValue={showRulercontent}></Textarea>
                                  <Button colorScheme={'blue'} marginTop={'5px'} left='120px' onClick={() => updataName()}>保存</Button>
                                </PopoverBody>
                              </PopoverContent>
                            </Portal>
                          </Popover>
                          <Tooltip label='下载数据库快照' placement='top'>
                            <Button size={'xs'} colorScheme={'blue'} left='10px' onClick={() => downFileanniu(item)}>实时备份</Button>
                          </Tooltip>
                          <Tooltip label='根据规则保存数据库快照到本地' placement='top'>
                            <Button size={'xs'} colorScheme={'blue'} left='14px' onClick={() => LocalruleStorage(item)}>执行</Button>
                          </Tooltip>
                          <Tooltip label='根据规则页面输出当前的数据库快照内容' placement='top'>
                            <Button size={'xs'} colorScheme={'blue'} left='18px' onClick={() => printDataWay(item)}>输出</Button>
                          </Tooltip>
                          <Tooltip label='删除规则' placement='top'>
                            <Button size={'xs'} colorScheme={'red'} left='22px' onClick={() => deleteDatatWay(item)}>删除</Button>
                          </Tooltip>
                        </Flex>

                      </Box>
                    </div>
                  )
                } else {
                  return <Container onClick={() => getshow(item)} maxW='container.xl' key={`${index}_item`}><a href='#'>{item}</a>  </Container>
                }
              }
            })
          }
        </Stack >
      )
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
              <TabList style={{ position: 'absolute', left: '32% ' }}>
                <Tab onClick={() => getconnection()}>显示所有表</Tab>
                <Tab onClick={() => getRuler()}>获取规则</Tab>
                <Tab onClick={() => getBaseSt()}>数据库快照</Tab>
                <Tab onClick={() => getImages()}>images接口</Tab>
              </TabList>
            </Tabs>


              {/* //新建规则 */}
            </div>
            {showybutton ? <></> : (<div style={{ position: 'absolute', left: '30px', top: '70px', }} >
              <Popover>
                <PopoverTrigger >
                  <Button colorScheme={'blue'} left='6px'>新建规则</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent left={'500px'}>
                    <PopoverArrow />
                    <PopoverHeader>新建规则</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      {/* <Textarea onMouseOut={(N) => setcontent(N.target.value)}>{item}</Textarea> */}
                      <Textarea onBlur={(N) => setcontent(N.target.value)}></Textarea>

                      <Textarea placeholder='请输入内容' height={'200px'} marginTop={'5px'} onBlur={(M) => setcondata(M.target.value)} />
                      <Button colorScheme={'blue'} marginTop={'5px'} left='120px' onClick={() => updataName()}>保存</Button>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </div>
            )}





            <div style={{ minWidth: '1200px', marginTop: '80px' }}>   {
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


      {/* 如何把数据绑定到这里 */}
      {/* <div style={{ whiteSpace: 'pre-wrap' }} >{showsetcontent}</div> */}
    </ChakraProvider>



  )

}