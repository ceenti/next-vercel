import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';
import CustomLink from './CustomLink';

export const Navbar = () => {
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
  ];
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(({text, href}, key) => {
        return <CustomLink href={href} label={text} key={key}/>
      })}
    </nav>
  )
}
