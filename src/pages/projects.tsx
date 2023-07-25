import Head from 'next/head'
import { MainContainer } from '~/components/Main'
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
      <MainContainer className="p-6">
        <main className="min-h-[90vh]">
          <ProjectListClient
            projects={projects.data}
            isError={projects.isError}
            isLoading={projects.isLoading}
          />
        </main>
      </MainContainer>
    </>
  )
}
