import Head from 'next/head'
import { Footer } from '~/components/Footer'
import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Porfolio</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer className="overflow-hidden" Navbar={<NavBar />}>
        <main className="h-screen p-4">Welcome</main>
        <Footer />
      </MainContainer>
    </>
  )
}
