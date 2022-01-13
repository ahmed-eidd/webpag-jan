import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Section from '../UI/Section/Section';

const GetStarted = () => {
  return (
    <Section name='get-started' heading='Get started'>
      <Text fontSize='lg'>We offer a 30-day money back guarantee</Text>

      <Box
        maxW='container.md'
        borderWidth='1px'
        borderRadius='lg'
        margin='auto'
        my='5'
        p='5'
      >
        <Stack spacing={2}>
          <Heading as='h3' size='lg'>
            Pay with Bitcoin
          </Heading>
          <Text>1 month</Text>
          <Text color='gray.500'>Send BTC 0.00012 ($4.50) to the following address: </Text>
          <Box
            borderWidth='1px'
            borderRadius='lg'
            mx='auto !important'
            my='20px !important'
            p='5'
            height='md'
            maxW='md'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            perferendis mollitia amet, sint quis nam repellendus laboriosam et
            dolor tempora, quos tenetur reprehenderit nobis consequuntur!
            Repellendus commodi nulla aliquam explicabo aperiam corrupti illum
            dolorum amet expedita sed! Illo exercitationem facilis asperiores
            magni, enim quia dicta accusantium doloribus ullam odio consequatur.
          </Box>
          <Text bg='yellow.400' p='4' borderRadius='sm'>
            Processing the payment may take up to 30 minutes.
          </Text>
        </Stack>
      </Box>
    </Section>
  );
};

export default GetStarted;
