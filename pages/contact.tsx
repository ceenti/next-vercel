import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';


export default function Contact(){
  return (
    <div className={styles.container}>
      <MainLayout>
        <h1 className={styles.title}>
          Go to <Link href='/'>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.js</code>
        </p>
      </MainLayout>
  </div>
  )
}
