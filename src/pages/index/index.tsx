import React from 'react'
import Layout from '../../components/layout/layout'

interface IndexProps {
}
const Index: React.FC<IndexProps> = ({ }) => {
  return (
    <Layout title="Home">
      <h1>Home</h1>
    </Layout>
  )
}

export default Index