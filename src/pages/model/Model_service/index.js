import React, { useState, useEffect } from 'react';
import {
  ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import { getEndpoint } from 'zero-element-boot/src/components/config/common';
import { history } from 'umi';
import { AutoLayout } from 'zero-element-boot';
// const promiseAjax = require('@/components/utils/request');
import layout from '../Model_service/layout3'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

// import layout from './Standalone/layout';
import { Page } from 'zero-element-boot/lib/components/cart'
import TabsCompox from 'zero-element-boot/lib/composition/testCrudList/compx/tabsComps'
import { size } from 'lodash';
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
// import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';
export default function index (props) {

  const { } = props;


  const [listData, setListData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [switchStatus, setSwitchStatus] = useState(false)
  const [showDetails, setDetails] = useState('')

  const [showEntitydata, setEntitydata] = useState('')

  const [isopen, setopen] = useState(false)
  let api = '/api/crud/serviceModel/serviceModels?pageSize=100';

  useEffect(() => {
    console.log('首次加载')
    const queryData = {}
    queryService(api, queryData)

  }, []);

  useEffect(() => {

  }, []);

  const config = {
    items: listData,
    layout: layout,

  };




  // </Page>
  //获取列表信息
  const queryService = async (api, queryData) => {

    setLoading(true)
    const resp = await promiseAjax(api, queryData);
    if (resp && resp.code === 200) {
      const list = resp.data.records;
      console.log('list', list);
      setListData(list);
      setLoading(false);

    } else {
      console.error('获取列表数据失败 ==', resp);
    }
  }

  //查看实体详情
  const onUserItemClick = (item) => {
    const id = item.id;
    let api = `/api/crud/serviceModel/serviceModels/${id}`
    promiseAjax(api)
      .then(responseData => {
        {
          if (responseData && responseData.code === 200) {
            let respdata = responseData.data;
            setDetails(respdata)
            setopen(true)
            console.log(respdata);
          } else {

          }

        }
      })


  }

  //回调函数
  const callback = (value) => {

    console.log('item1111111 = ', value)
    if (value) {
      queryService(api, {})
    }
  }







  const handleChange = () => {
    const status = !switchStatus;
    setSwitchStatus(status)
    if (!status) {
      setListData(listData);

    }
  }



  //tab切换
  const switchTab = (item, index) => {
    if (index != tabIndex) {
      setTabIndex(index)
      const queryData = {
        typeId: item.id
      }

    }
  }

  //关闭框
  function onClose () {
    setopen(false)
  }



  return (
    <Page >

      <ChakraProvider>
        <div style={{ position: 'absolute', left: '20px' }}>
          <VStack align='stretch' spacing='-2'>
            <Box style={{ margin: '10px 10px 30px 10px', paddingLeft: '8px' }}>
              <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                  编辑：
                </FormLabel>
                <Switch size='lg' onChange={() => handleChange()} isChecked={switchStatus} />
              </FormControl>
            </Box>
            <Box>
            </Box>

            <>
              <div style={{ marginTop: '20px' }}>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <Box>
                    <Cart fill='#ffffff' lineColor='#cfe2f3' corner='10px' linewidth='4px' isOnHover={false} >
                      <AutoLayout {...config} onItemClick={onUserItemClick} cb={callback} isSwtich={switchStatus} />
                    </Cart>
                  </Box>


                )
                }
              </div>
            </>

          </VStack>

        </div>

        {/* <div>
          <Button onClick={() => { queryEntity() }}></Button>
          { setDetailis? ( <Textarea>{showDetails}</Textarea>):<></>}
        </div> */}

        <Modal closeOnOverlayClick={false} isOpen={isopen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>业务详情</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div style={{ position: 'reletive', left: '20px', fontSize: '16px', fontWeight: 'bold' }}>
                <Flexbox>
                  <Cart fill='#fcfcfc' linewidth='0px'>
                    {'表模型标识:' + showDetails.modelName}
                  </Cart>
                </Flexbox>
                <Flexbox>
                  <Cart fill='#fcfcfc' linewidth='0px'>
                    {'记录:' + showDetails.note}
                  </Cart>
                </Flexbox>
                <Flexbox>
                  <Cart fill='#fcfcfc' linewidth='0px'>
                    {' 模型ID:' + showDetails.modelId}
                  </Cart>
                </Flexbox>
                <Flexbox>
                  <Cart fill='#fcfcfc' linewidth='0px'>
                    {'模型名称:' + showDetails.name}
                  </Cart>
                </Flexbox>
                <Flexbox>
                  <Cart fill='#fcfcfc' linewidth='0px'>
                    {'id:' + showDetails.id}
                  </Cart>
                </Flexbox>
                <Flexbox>
                  <Cart fill='#fcfcfc' linewidth='0px'>
                    {'模型类型:' + showDetails.modelType}
                  </Cart>
                </Flexbox>
                <Flexbox>
                  <Cart fill='#fcfcfc' linewidth='0px'>
                    {'主表模型Id:' + showDetails.masterTableModelId}
                  </Cart>
                </Flexbox>
                {showDetails.items?.map(item =>
                  <Cart fill='#fcfcfc' linewidth='0px' key={item.id}>
                    item: (
                    {'id:' + item.id}
                    {'itemsKey:' + item.itemsKey}
                    {'表格模型Id:' + item.tableModelId}
                    {'对等关系Id:' + item.relationshipPeerId}
                    {'表格模型关系:' + item.tableModelRelationship}

                    {'关联Id:' + item.relationshipId}
                    {'业务模型ID:' + item.serviceModelId})

                  </Cart>)}

              </div>
            </ModalBody>
            <ModalFooter>

              <Button onClick={onClose}>OK</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* <Button onClick={() => queryEntity()}> 1111</Button> */}
        <Box>
          {showEntitydata.id}
        </Box>

      </ChakraProvider>

    </Page >

  )

}
