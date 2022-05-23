import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider, } from '@chakra-ui/react'
import Field from "../Model_field"
import Entity from '../Model_entity'
import Service from '../Model_service'
import { Page } from 'zero-element-boot/lib/components/cart'

export default function Index (props) {
  return (<Page>
    <ChakraProvider>

      <Tabs variant='soft-rounded' colorScheme='gray'>
        <TabList style={{ position: 'absolute', top: '25px', left: '40%' }}>
          <Tab >数据模型</Tab>
          <Tab>实体模型</Tab>
          <Tab>业务模型</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Field></Field>
          </TabPanel>
          <TabPanel>
            <Entity></Entity>
          </TabPanel>
          <TabPanel>
            <Service></Service>
          </TabPanel>



        </TabPanels>
      </Tabs>

    </ChakraProvider>



  </Page >
  )

}