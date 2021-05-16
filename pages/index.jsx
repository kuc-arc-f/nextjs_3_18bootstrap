import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout'

export default function Index(data) {
  return (
  <div className="bg-gray-100">
    <Head><title>{process.env.MY_SITE_NAME}</title>
    </Head>    
    <Layout>
      <div className="container mx-auto px-5 pb-5 bg-white">
        <hr />
        <h1 className="text-5xl font-bold my-2">Home</h1>
        <p>This is home page.</p>
        <hr className="my-2" />
        <button className="btn-blue mx-2">button-blue</button>
        <button className="btn-red mx-2">button-red</button>
        <button className="btn-green mx-2">button-gren</button>
        <hr className="my-2" />
        <div className="icon_wrap text-green-700">
          <i className="bi bi-alarm mx-2"></i>
          <i className="bi bi-calendar mx-2"></i>
          <i className="bi bi-house-fill mx-2"></i>
        </div>        
        <hr className="my-2" />
      </div>
    </Layout>
    <style>{`
    .icon_wrap{ font-size: 2rem; }
    `}</style>     
  </div>
  )
}

export async function getStaticProps() {
  return {
    props : {
      blogs: [],
      site_name : process.env.MY_SITE_NAME,
//      info_text : "CMSの関連記事を公開予定しております。",        
    }
  };
}
