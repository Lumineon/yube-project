import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { token } from './utils/getAccessToken';
import theme from './styles/theme';

import Login from './containers/Login/index'
import Header from './containers/Header'
import Footer from './containers/Footer'
import AppRouter from '../js/router/AppRouter'

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <Header />
        {accessToken ?
        <>
          <AppRouter />
        </>
        : <Login />}
        <Footer />
    </ThemeProvider>
  );
}

export default App;
