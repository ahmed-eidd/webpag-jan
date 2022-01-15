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

      {/* !important inside of all these sections excepts for the <Header/> you can change the Heading inside the section  */}

      {/* you can pass the name of the company is the "companyName" input */}
      <Header companyName={'Company Name'} />

      {/* you pass true to switch positions if you want */}
      <MoreInfo  reverse={false}  />

      <GetStarted />

      <AnyHelp />
    </Container>
  );
};

export default Layout;
