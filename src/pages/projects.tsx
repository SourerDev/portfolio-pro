import Head from 'next/head'
import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Projects</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer className="p-6" Navbar={<NavBar />}>
        <p>This is a project page</p>
      </MainContainer>
    </>
  )
}
