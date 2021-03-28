import React from 'react';
import styles from './footer.module.scss';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; copyright {new Date().getFullYear()} | Romana </p>
    </footer>
  )
}

export default Footer