import { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  useEffect(() => {
    // userLang is the brower language
    const userLang = navigator.language || navigator.userLanguage;

    // browerLanguage is the language we saved in a variables in the local storage
    const browserLanguage = localStorage.getItem('localLanguage');

    // check if the browerLanguage doesn't excited in the localstorage or the userLang has changed
    if (!browserLanguage || browserLanguage !== userLang) {
      localStorage.setItem('localLanguage', userLang);
    }
  }, []);
  return <Layout />;
}

export default App;
