import React from 'react';
import styles from './header.module.scss'
import AppLink from '../appLink/appLink';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header} >
      <div className={styles.logo}>
        <AppLink href="/" label="Next" />
      </div>
      <div className={styles.nav}>
        <AppLink href="/" label="Home" />
        <AppLink href="/about" label="About" />
        <AppLink href="/contact" label="Contact" />
      </div>
    </header>
  )
}

export default Header