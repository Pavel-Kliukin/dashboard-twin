import Head from 'next/head'
import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import DashboardLayout from '@components/DashboardLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard Twin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-screen h-screen flex flex-col justify-start'>
        <Sidebar />
        <div className='h-full flex flex-col bg-cyan-100'>
          <Navbar />
          <DashboardLayout />
        </div>
      </main>

    </div>
  )
}
