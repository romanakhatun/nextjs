import React from 'react';
import Head from 'next/head';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './layout.module.scss'

interface LayoutProps {
  title: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ title, description = 'Next.js Blog', children }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@argentinux" key="twhandle" />

        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout