import Head from 'next/head'
import { Footer } from '~/components/Footer'
import { MainContainer } from '~/components/Main'
import { NavBar } from '~/components/NavBar'
import { ProjectListClient } from '~/components/ProjectList'
import { api } from '~/utils/api'

export default function ProjectsPage() {
  const projects = api.project.getAll.useQuery()

  return (
    <>
      <Head>
        <title>Sourer Dev | Projects</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer className="p-6" Navbar={<NavBar />}>
        <main className="min-h-[90vh]">
          <ProjectListClient
            projects={projects.data}
            isError={projects.isError}
            isLoading={projects.isLoading}
          />
        </main>

        <Footer />
      </MainContainer>
    </>
  )
}
