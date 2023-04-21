import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function About(){
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

About.getLayout = function getLayout(page){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}