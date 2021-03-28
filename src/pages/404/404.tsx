import AppLink from '../../components/appLink/appLink';
import Layout from '../../components/layout/layout';

export default function NotFound() {
  return (
    <Layout title="Not Found">
      <h1>Not Found 404</h1>
      <p>Sorry! Not found page!</p>
      <AppLink href="/" label="Go to home." />
    </Layout>
  )
}