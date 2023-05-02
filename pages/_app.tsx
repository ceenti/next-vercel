import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';  
import '../styles/globals.css';
import { AppProps } from 'next/app';


type NextPageWithLayout = NextPage & {
  // getLayout?: (page: ReactElement) => ReactNode;
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
