import React from 'react';
import styles from './contact.module.scss';
import Layout from '../../components/layout/layout'

interface ContactProps {

}

const Contact: React.FC<ContactProps> = ({ }) => {
  return (
    <Layout title="Contact">
      <h2 className={styles.heading1}>Contact</h2>
    </Layout>
  )
}

export default Contact