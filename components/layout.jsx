//import Alert from '../components/alert'
import Head from 'next/head'
import Footer from '../components/footer'
import Navibar from '../components/Navibar'

export default function Layout({ preview, children }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <link href="/css/font.css" rel="stylesheet"></link>
        <link href="/css/components/buttons.css" rel="stylesheet"></link>
        <link href="/css/components/bgcolor.css" rel="stylesheet"></link>
      </Head>
      <Navibar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
