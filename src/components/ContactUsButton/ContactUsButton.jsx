import { Button, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import classes from './ContactUsButton.module.css';

const ContactUsButton = ({ style, btnStyle, ...props }) => {
  return (
    <Flex justify='flex-end' align='center' gap='5px' style={style} {...props}>
      <Button
        href='https://www.facebook.com'
        variant='solid'
        isExternal
        as={Link}
        style={btnStyle}
        _hover={{
          textDecoration: 'none',
          background: 'var(--chakra-colors-gray-200)'
        }}
      >
        Contact
        <i className={`${classes.TelegramIcon} fab fa-telegram-plane`}></i>
      </Button>
    </Flex>
  );
};

export default ContactUsButton;
