import Head from 'next/head'
import { Footer } from '~/components/Footer'
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
        <main className="min-h-[90vh]">
          <p>This is a project page</p>
        </main>

        <Footer />
      </MainContainer>
    </>
  )
}
