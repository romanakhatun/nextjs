import React from 'react'
import Layout from '../../components/layout/layout';

interface AboutProps {

}

const About: React.FC<AboutProps> = ({ }) => {
  return (
    <Layout title="About">
      <h1>About</h1>
    </Layout>
  )
}

export default About;