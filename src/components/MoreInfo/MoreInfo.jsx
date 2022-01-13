import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import Section from '../UI/Section/Section';

const MoreInfo = ({ reverse,...props }) => {
  return (
    <Section name='more-info' {...props} heading='More info'>
      <Flex justify='space-between' direction={reverse ? 'row-reverse' : 'row'}  align='flex-start' p='5' gap='5'>
        <Text maxW='container.sm'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
          saepe expedita facilis odio, quae deserunt mollitia quis nobis ipsum
          quibusdam, fugiat nemo voluptatum eum nam dolor quam? Atque, soluta
          asperiores!
        </Text>
        <Box borderWidth='1px' borderRadius='lg' p='5' width='100%'>
          <Box bg='green.100' height='sm'></Box>
        </Box>
      </Flex>
    </Section>
  );
};

export default MoreInfo;
