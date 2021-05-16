import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout_bootstrap'

export default function Index(data) {
  return (
  <div className="bg-gray-100">
    <Head><title>{process.env.MY_SITE_NAME}</title>
    </Head>    
    <Layout>
      <div className="container mx-auto px-5 pb-5 bg-white">
        <hr />
        <h1 className="text-5xl font-bold my-2">Admin Home</h1>
        <p>This is admin page.</p>
        <hr />
        <button className="btn btn-primary">button</button>
      </div>
    </Layout>
  </div>
  )
}

export async function getStaticProps() {
  return {
    props : {
      blogs: [],
    }
  };
}
