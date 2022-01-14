import { Container } from '@chakra-ui/react';
import AnyHelp from '../AnyHelp/AnyHelp';
import GetStarted from '../GetStarted/GetStarted';
import Header from '../Header/Header';
import MoreInfo from '../MoreInfo/MoreInfo';

const Layout = () => {
  return (
    <Container
      bg='white'
      maxW='container.xl'
      borderWidth='1px'
      borderRadius='lg'
      my='10'
      p='5'
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      }}
    >
      <Header />

      <MoreInfo />
      <GetStarted />
      <AnyHelp />
    </Container>
  );
};

export default Layout;
