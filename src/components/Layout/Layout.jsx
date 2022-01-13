import { Container } from '@chakra-ui/react';
import AnyHelp from '../AnyHelp/AnyHelp';
import GetStarted from '../GetStarted/GetStarted';
import Header from '../Header/Header';
import MoreInfo from '../MoreInfo/MoreInfo';

const Layout = () => {
  return (
    <Container maxW='container.xl'>
      <Header />

      <MoreInfo  />
      <GetStarted />
      <AnyHelp />
    </Container>
  );
};

export default Layout;
