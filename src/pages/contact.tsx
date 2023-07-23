import Head from 'next/head'
import { Footer } from '~/components/Footer'
import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function ContactMe() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Contact me</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer Navbar={<NavBar />} className="p-6">
        <main className="min-h-[90vh]">
          Contact me
        </main>

        <Footer />
      </MainContainer>
    </>
  )
}
