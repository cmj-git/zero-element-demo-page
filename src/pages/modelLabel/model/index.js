import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
require('./index.less');

/**
 * 
 */
export default function (props) {

  const { value, index = 0 } = props;

  return (
    <div className="textColor">
      <Flex h="19px">
        <Center axis='vertical' >
          {`${value}`}
        </Center>
        <Center w="10px">
        </Center>
      </Flex>
    </div>
  )



}