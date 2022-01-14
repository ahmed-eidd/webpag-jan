import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Center,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Transition } from 'react-transition-group';
import ContactUsButton from '../ContactUsButton/ContactUsButton';
import classes from './Header.module.css';

// header animation duration for every element
const duration = 300;

// a function that return inline style to animate both opacity and transform, you pass time and delay between each animation
const defaultStyle = (time, delay) => {
  return {
    transition: `opacity ${time}ms ease-in-out ${
      delay || 0
    }ms , transform ${time}ms ease-in-out ${delay || 0}ms`,
    opacity: 0,
  };
};

// four stages of the animation and it's inline styles Read more https://reactcommunity.org/react-transition-group/
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

// same as above
const transformTransitionStyles = {
  entering: { opacity: 1, transform: 'translateY(10vh)' },
  entered: { opacity: 1, transform: 'translateY(0vh)' },
  exiting: { opacity: 0, transform: 'translateY(20vh)' },
  exited: { opacity: 0, transform: 'translateY(40vh)' },
};

const Header = ({ companyName, onGetStartedClick, onMoreInfoClick }) => {
  const [open, setOpen] = useState(false);

  const btnStyle = {
    cursor: 'pointer',
  };

  useEffect(() => {
    // a setTimeout Function to start the animation after the site loads the first time
    setTimeout(() => {
      setOpen(true);
    }, 800);
  }, []);

  return (
    <>
      <Transition in={open} timeout={duration}>
        {(state) => (
          <Box height='100vh' my='20px'>
            <ContactUsButton
              style={{ ...defaultStyle('500'), ...transitionStyles[state] }}
            />

            <Flex height='80%' justify='center' align='center'>
              <Box>
                <Heading
                  textAlign='center'
                  style={{
                    ...defaultStyle('500', '500'),
                    ...transitionStyles[state],
                  }}
                >
                  {companyName || 'Company Name'}
                </Heading>
                <Text
                  my='30px'
                  padding='10px 30px'
                  textAlign='center'
                  style={{
                    transform: 'translateY(60vh)',
                    ...defaultStyle('500', '1000'),
                    ...transformTransitionStyles[state],
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore nemo nisi, cumque consequuntur aspernatur molestias.
                  Impedit est omnis consequatur. Alias!
                </Text>
                <Flex
                  align='center'
                  justify='center'
                  gap='10%'
                  style={{
                    transform: 'translateY(60vh)',
                    ...defaultStyle('500', '1000'),
                    ...transformTransitionStyles[state],
                  }}
                >
                  <Button
                    style={btnStyle}
                    as={Link}
                    onClick={onGetStartedClick}
                    to='get-started'
                    smooth={true}
                    duration={500}
                    colorScheme='green'
                  >
                    Get Started
                    {console.log(onGetStartedClick)}
                  </Button>
                  <Button
                    style={btnStyle}
                    onClick={onMoreInfoClick}
                    to='more-info'
                    spy={true}
                    smooth={true}
                    duration={500}
                    as={Link}
                  >
                    More Info
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        )}
      </Transition>
    </>
  );
};

export default Header;
