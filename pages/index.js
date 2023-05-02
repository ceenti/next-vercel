import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import MainLayout from '../components/layouts/MainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <MainLayout>
        <h1 className={styles.title}>
          Welcome to <Link href="/about">About</Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </MainLayout>
    </div>
  )
}
