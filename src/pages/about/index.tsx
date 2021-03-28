import React from 'react';
import styles from './about.module.scss'
import Layout from '../../components/layout/layout';

interface AboutProps {

}

const About: React.FC<AboutProps> = ({ }) => {
  return (
    <Layout title="About">
      <h1 className={styles.heading1}>About</h1>
    </Layout>
  )
}

export default About;