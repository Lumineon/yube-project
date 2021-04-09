import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import Header from './containers/Header'
import Footer from './containers/Footer'
// import HomePage from './pages/HomePage'
import PlaylistPage from './pages/PlaylistPage'
import SearchPage from './pages/SearchPage'
import AppRouter from '../js/router/AppRouter'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
