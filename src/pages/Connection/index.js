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
  const [switchStatus, setSwitchStatus] = useState(true)
  const [showsetcontent, setmycontent] = useState('')



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
    document.getElementById('printBase').hidden = true
    document.getElementById('rulerDeploy').hidden = true
    document.getElementById('deleteRule').hidden = true
    document.getElementById('deleteBaseData').hidden = true

    //隐藏数据库输入框
    document.getElementById('downSnapshot').hidden = true


  }
  //获取所有规则表
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
    document.getElementById('printBase').hidden = true
    document.getElementById('deleteRule').hidden = true
    document.getElementById('rulerDeploy').hidden = true

    //显示数据库输入框
    document.getElementById('downSnapshot').hidden = false

    document.getElementById('deleteBaseData').hidden = false

  }


  //下载数据库快照
  function downData () {
    downFileanniu(content)
    getRuler()

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
    w.location.href = URL + api
    console.log(URL);
    setSwitchStatus(false)
    alert('下载成功！')

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

    //点击显示输入框
    document.getElementById('saveLocal').hidden = false
    document.getElementById('updataRule').hidden = false
    document.getElementById('downBase').hidden = false
    document.getElementById('printBase').hidden = false
    document.getElementById('deleteRule').hidden = false
    document.getElementById('rulerDeploy').hidden = false


    //隐藏数据库输入框
    document.getElementById('downSnapshot').hidden = true
    document.getElementById('deleteBaseData').hidden = true



  }

  //新建规则，更新规则 
  function updataName () {
    anniu(content, condata)

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

  //保存快照到服务器

  function SaveData () {
    LocalruleStorage(content)
    //获取规则列表
    getRuler()

    // //刷新页面
    // location.reload()
  }
  //文本信息
  var content = ''
  const saveBaseData = (n) => {
    content = n
  }

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
            alert('保存成功!')

          } else {
            setIsShowList(true)
            setIsShowData(false)
          }
          setIsLoading(false)
        }
      })


  }






  //根据规则(ruler)页面输出当前的数据库快照内容

  function printData () {
    printDataWay(content)

  }
  //文本信息
  var content = ''
  const printBaseData = (n) => {
    content = n
  }

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

  function getRulerDeploy () {
    RulerDeployWay(content)

  }
  //文本信息
  var content = ''
  const RulerDeploycontent = (n) => {
    content = n
  }

  //方法
  function RulerDeployWay (content) {
    let api = '/dev/connection/snapshot/rulers/json/' + content;
    console.log(api);

    promiseAjax(api)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          respData = respData.replace(/[\'\\\\/\b\f\n\r\t]/g, '');
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
  function deleteData () {
    deleteDatatWay(content)
    //获取规则列表
    getRuler()


  }
  //文本信息
  var content = ''
  const deleteRuleData = (n) => {
    content = n
  }

  //规则名删除规则方法
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



  //下载snapshot文件

  function printdataBaseS () {
    printdataBaseSWay(content)
    //刷新页面

  }
  // dataBaseS文本信息
  var content = ''
  const dataBaseS = (n) => {
    content = n
  }

  //方法
  function printdataBaseSWay (content) {
    let api = '/dev/connection/snapshot/dl?&pattern=' + content;
    const w = window.open('about:blank');
    w.location.href = URL + api

  }



  //根据删除数据库快照
  function deleteBase () {
    deleteBasetWay(content)
    getBaseSt()
  }
  //文本信息
  var content = ''
  const deleteBaseData = (n) => {
    content = n
  }

  //规则名删除规则方法
  function deleteBasetWay (content) {
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
    document.getElementById('printBase').hidden = true
    document.getElementById('deleteRule').hidden = true
    document.getElementById('rulerDeploy').hidden = true
    //隐藏数据库输入框
    document.getElementById('downSnapshot').hidden = true

    document.getElementById('deleteBaseData').hidden = true
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
              <TabList style={{ position: 'absolute', left: '32% ' }}>
                <Tab onClick={() => getconnection()}>显示所有表</Tab>
                <Tab onClick={() => getRuler()}>获取/更新规则</Tab>
                <Tab onClick={() => getBaseSt()}>获取数据库快照</Tab>
                <Tab onClick={() => getImages()}>images接口</Tab>
              </TabList>

            </Tabs>
            </div>


            <div id='updataRule' hidden={true} style={{ position: 'absolute', top: '100px', left: '650px' }}><Input placeholder='规则名称' width={'120px'} onBlur={(N) => setcontent(N.target.value)} />
              <Input placeholder='输入内容' width={'250px'} onBlur={(M) => setcondata(M.target.value)} />

              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} marginLeft={'20px'} colorScheme='blue' onClick={() => updataName()}>新建/更新</Button>

            </div>
            {/* 下载数据库快照-输入框 */}
            <div id='downBase' hidden={true} style={{ position: 'absolute', top: '210px', left: '650px' }}><Input placeholder='根据规则名下载数据库快照' width={'350px'} onBlur={(N) => downFile(N.target.value)} />
              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} colorScheme='blue' onClick={() => downData()}>下载</Button>
            </div>

            {/* 根据规则(ruler)保存数据库快照到服务器本地-输入框 */}
            <div id='saveLocal' hidden={true} style={{ position: 'absolute', top: '320px', left: '650px' }}><Input placeholder='根据规则名保存数据库快照到服务器本地' width={'350px'} onBlur={(N) => saveBaseData(N.target.value)} />

              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} colorScheme='blue' onClick={() => SaveData()}>保存</Button>

            </div>


            {/* 页面输出当前的数据库快照内容-输入框 */}
            <div id='printBase' hidden={true} style={{ position: 'absolute', top: '430px', left: '650px' }}><Input placeholder='根据规则名输出当前的数据库快照内容' width={'350px'} onBlur={(N) => printBaseData(N.target.value)} />
              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} colorScheme='blue' onClick={() => printData()}>输出</Button>
            </div>



            {/* 查看具体的命名规则的配置详情-输入框 */}
            <div id='rulerDeploy' hidden={true} style={{ position: 'absolute', top: '540px', left: '650px' }}><Input placeholder='根据规则名查看当前规则配置详情' width={'350px'} onBlur={(N) => RulerDeploycontent(N.target.value)} />
              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} colorScheme='blue' onClick={() => getRulerDeploy()} >查看</Button>
            </div>





            {/* 删除规则-输入框 */}
            <div id='deleteRule' hidden={true} style={{ position: 'absolute', top: '650px', left: '650px' }}><Input placeholder='根据规则名删除当前规则' width={'350px'} onBlur={(N) => deleteRuleData(N.target.value)} />
              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} colorScheme='blue' onClick={() => deleteData()}  >删除</Button>
            </div>


            {/* 根据数据库文件名下载snapshot文件-输入框 */}
            <div id='downSnapshot' hidden={true} style={{ position: 'absolute', top: '200px', left: '650px' }}><Input placeholder='根据数据库文件名下载snapshot文件' width={'350px'} onBlur={(N) => dataBaseS(N.target.value)} />
              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} colorScheme='blue' onClick={() => printdataBaseS()} >下载</Button>
            </div>

            {/* 删除保存在本地的快照文件-输入框 */}
            <div id='deleteBaseData' hidden={true} style={{ position: 'absolute', top: '320px', left: '650px' }}><Input placeholder='根据数据库文件名删除保存在本地的快照' width={'350px'} onBlur={(N) => deleteBaseData(N.target.value)} />
              <Button style={{ position: 'absolute', top: '0px', left: '356px' }} colorScheme='blue' onClick={() => deleteBase()} >删除</Button>
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

      {/* 如何把数据绑定到这里 */}
      {/* <div style={{ whiteSpace: 'pre-wrap' }} >{showsetcontent}</div> */}
    </ChakraProvider>



  )

}