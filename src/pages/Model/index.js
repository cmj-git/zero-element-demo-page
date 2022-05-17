import React, { useState } from 'react';
import { ChakraProvider, Flex, Center, Box, Stack, Spacer, VStack, Container, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";
import Loading from 'zero-element-boot/lib/components/loading';
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
import JarItem from './JarItem';

export default function Index (props) {

  // const [showButton, setButton] = useState[false]


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
      <Tabs variant='enclosed' align="center">
        <TabList>
          <Tab>One
            <Button style={{ position: 'absolute', top: '200px' }}>1</Button>
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
  )
}