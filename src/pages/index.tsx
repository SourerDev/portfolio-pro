import Head from 'next/head'
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
      <MainContainer>
        <NavBar />
      </MainContainer>
    </>
  )
}
