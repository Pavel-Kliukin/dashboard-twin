import Head from 'next/head'
import Header from '@components/Header'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className='font-poppins'>Dashboard</div>
      </main>

    </div>
  )
}
