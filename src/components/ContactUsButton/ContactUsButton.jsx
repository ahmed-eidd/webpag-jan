import { Button, Flex, Link } from '@chakra-ui/react';
import classes from './ContactUsButton.module.css';

const ContactUsButton = ({ style, btnStyle, ...props }) => {
  return (
    <Flex justify='flex-end' align='center' gap='5px' style={style} {...props}>

      <Button
        // the link for the button 
        href='https://www.facebook.com'
        variant='solid'
        isExternal
        as={Link}

        // taking style as an input if needed
        style={btnStyle}

        // this is style for the hover state
        _hover={{
          textDecoration: 'none',
          background: 'var(--chakra-colors-gray-200)'
        }}
      >
        Contact

        {/* The Telegram Icon */}
        <i className={`${classes.TelegramIcon} fab fa-telegram-plane`}></i>

      </Button>
    </Flex>
  );
};

export default ContactUsButton;
