import React from 'react';
import styles from './index.module.scss';
import Layout from '../../components/layout/layout';
import Newsletter from '../../components/newsletter/newsletter';

interface IndexProps {
}
const Index: React.FC<IndexProps> = ({ }) => {
  return (
    <Layout title="Home">
      <section className={styles.homeSection}>
        <h1 className={styles.heading1}>NextJS Blog</h1>
        <p>Create With TypeScript and JavaScript</p>
        <Newsletter></Newsletter>
      </section>
    </Layout>
  )
}

export default Index