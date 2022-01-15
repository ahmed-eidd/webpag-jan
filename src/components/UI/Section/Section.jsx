import { Box, Divider, Heading } from '@chakra-ui/react';
import classes from './Section.module.css';

const Section = ({ children, heading, ...props }) => {
  return (
    <Box minH='100vh' my='20px' {...props}>
      <Heading as='h1' size='2xl' paddingBottom={3}>
        {heading}
      </Heading>
      <Divider />
      {children}
    </Box>
  );
};

export default Section;
