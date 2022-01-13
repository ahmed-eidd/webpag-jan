import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import ContactUsButton from '../ContactUsButton/ContactUsButton';

const AnyHelp = () => {
  const btnstyle = { width: '100%' };
  return (
    <Stack p='5' spacing={5}>
      <Heading>Any Help?</Heading>
      <ContactUsButton style={btnstyle} btnStyle={btnstyle} />
    </Stack>
  );
};

export default AnyHelp;
