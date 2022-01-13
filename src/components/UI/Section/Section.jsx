import { Box, Divider, Heading } from '@chakra-ui/react';
import classes from './Section.module.css';

const Section = ({ children, heading, id, ...props }) => {
  return (
    <Box id={id}  className={classes.Section} my='20px' {...props}>
      <Heading as='h1' size='2xl' paddingBottom={3}>{heading}</Heading>
      <Divider />
      {children}
    </Box>
  );
};

export default Section;
