import React, {ReactElement} from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import {DarkLayout} from '../components/layouts/DarkLayout';

export default function AboutPage(){
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <Link href='/contact'>Contact</Link>
      </h1>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/about.js</code>
      </p>
  </>
  )
}

AboutPage.getLayout = function getLayout(page:ReactElement){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}