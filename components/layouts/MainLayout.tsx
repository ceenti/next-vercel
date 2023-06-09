import React from 'react';
import Head from 'next/head'
import { Navbar } from '../../components/Navbar';
import Image from 'next/image';
import {PropsWithChildren, FC} from 'react';
import styles from '../../styles/Home.module.css'

interface MainLayout {
  title?: string
}

const MainLayout: FC<PropsWithChildren<MainLayout>> = ({title='', children}) => {
  return (
    <>
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content="About Demo 01" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
    </>
  )
}

export default MainLayout;
