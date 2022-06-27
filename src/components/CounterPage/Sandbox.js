import React, { useState, useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import CounterPage from './index';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import { Flex, Box } from '@chakra-ui/react'
import VStack from 'zero-element-boot/lib/components/layout/VStack'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import Button from '@/components/presenter/button/Button'
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
require('./index.less')


export default function (props) {

    // let endpoint='http://app1.console.smallsaas.cn:8001'

    const { onRemark, number = '2' } = props


    // let api = '/api/AutoDomeData'

    //   const api =endpoint +'/api/u/asset/user/userAsset'

    const api = '/api/pub/product/products?category=Food'
    const [productList, setProductList] = useState([])
    const [productCount, setProductCount] = useState([])
    const [productTotal, setProductTotal] = useState([])

    useEffect(_ => {

        promiseAjax(api)
            .then(res => {
                if (res && res.code === 200) {
                    let respData = res.data;
                    if (respData && respData.records && respData.records.length > 0) {

                        // console.log(respData,'== respData')
                        setProductList(respData.records)
                        handleCount(respData.records)
                    }
                } else {
                    console.log('获取商品信息失败 == ', res)
                }
            })

    }, [])


    //计算商品总数和总额 (for forEach)
    function handleCount(productList) {
        //数量
        let count = 0;
        //总额
        let total = 0;
        productList.map((item, index) => {
            // console.log(item,'== item')
            // console.log(index,'== index')
            if (item.quantity > 0) {
                count = count + item.quantity
                total = total + (item.price * item.quantity)
            } else {
                count = count + 1
                total = total + item.price
            }
        })
        setProductCount(count)
        setProductTotal(total)
    }

    //点击的商品item，回调商品ID和商品数量
    function callback(productId, number) {
        // console.log('product productId = ', productId)
        // console.log('product number = ', number)

        productList.map(item => {
            if (productId == item.id) {
                item.quantity = number
            }
            return item
        })
        // console.log('productList = ', productList)

        handleCount(productList)
    }


    return (
        <ChakraProvider>
            <div style={{
                backgroundColor: '',
                height: '100%',
                width: '100%'
            }} >
                <VStack>
                    <Cart fill='#ffffff' linewidth='0' corner='12px' margin='6px 10px' padding='6px'>
                        <Flex w='100%'>
                            <div style={{
                                display: 'flex', justifyContent: 'flex-start', margin: '16px 10px -3px 10px', alignItems: 'center', height: '100%', width: '30px',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#09ba08" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </div>
                            <Box w='100%'>
                                <Flex>
                                    <div style={{
                                        display: 'flex',
                                        fontSize: '14PX',
                                        fontWeight: 'bold',
                                        margin: '6px 0 0 0',
                                        width: '',
                                        // border: '1px #ff0000 solid',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                    }}>
                                        肖生
                            </div>
                                    <div style={{
                                        display: 'flex',
                                        fontSize: '14PX',
                                        margin: '10px 8px 4px',
                                        width: '',
                                        // border: '1px #ff0000 solid',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                    }}>
                                        13760828608
                            </div>
                                </Flex>
                                <div style={{
                                    display: 'flex',
                                    fontSize: '13PX',
                                    width: '',
                                    // border: '1px #ff0000 solid',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    margin: '2px 0 8px 0',
                                }}>
                                    广东省 广州市 珠海区
                            </div>
                            </Box>
                            <div style={{
                                display: 'flex', fontSize: '18PX', color: '#cdcdcd', margin: '10px', width: '20px', justifyContent: 'flex-end', alignItems: 'center',
                            }}> > </div>

                        </Flex>
                    </Cart>

                    <CssCart backgroundColor='#ffffff' width='100%' padding='' borderRadius='12px' margin='10px'>
                        <Box h='' bg='' >
                            <CounterPage productList={productList} callBackData={callback} />
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                width: '100%',
                                borderTop: '1px solid #f5f5f5',
                                marginTop: '10px',
                                paddingTop: '10px'
                            }}>
                                <Flex>
                                    <div style={{ margin: '8px 0 auto 4px', fontSize: '12px', color: '#7d7d7d' }}>共 {productCount} 件 </div>
                                    <div style={{ margin: '8px 0 auto 4px', fontWeight: 'bold', fontSize: '12px' }}>合计：</div>
                                    <div style={{ fontWeight: 'bold', margin: 'auto 10px auto 4px', fontSize: '20px', color: '#ff0000' }}>￥{productTotal}</div>
                                </Flex>
                            </div>
                        </Box>

                    </CssCart>

                    <Cart fill='#ffffff' linewidth='0' corner='12px' margin='10px' padding='2px'>
                        <Flex>
                            <div style={{
                                display: 'flex', justifyContent: 'flex-start', margin: '14px 4px -3px 10px', alignItems: 'center', fontSize: '14px', fontWeight: 'bold', height: '', width: '35%',
                            }}>订单备注</div>
                            <div onClick={onRemark} style={{
                                display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '14px 10px -3px 4px',
                                fontSize: '14px', height: '100%', color: '#cdcdcd', width: '65%'
                            }}>选填，输入备注内容 ></div>
                        </Flex>
                    </Cart>

                    {/* <CssCart fill='' width='100%'>
                    <HCenter backgroundColor='transparent'>
                        <Flex>
                            <AgreeSelector>
                                <div style={{ margin: '5px 0 auto 0', fontSize: '12px', color: '', width: '' }}>已阅读并同意</div>
                                <div style={{ margin: '5px 0 auto 0', fontSize: '12px', color: '#09ba08', width: '' }}>《群接龙用户协议》</div>
                            </AgreeSelector>
                        </Flex>
                    </HCenter>
                </CssCart> */}

                    <div style={{ width: '100%', margin: '2px 4px 0 6px', backgroundColor: 'transparent' }}>
                        <Button solid color='#09ba08'>
                            完成下单同时分享给团长
                    </Button>
                    </div>
                </VStack>
            </div>
        </ChakraProvider>
    )
}