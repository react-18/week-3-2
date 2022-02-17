import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme';
import { store } from '../store/store';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>React 18</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
