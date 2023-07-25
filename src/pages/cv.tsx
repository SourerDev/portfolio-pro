import Head from 'next/head'
import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function CvPage() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Cv</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer Navbar={<NavBar />}>cv</MainContainer>
    </>
  )
}