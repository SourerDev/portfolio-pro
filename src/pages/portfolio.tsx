import Head from 'next/head'
import { ContainerPage } from '~/components/container_page'
import { ProjectList } from '~/components/lists/project_list'
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
      <ContainerPage>
        <main className="min-h-[90vh]">
          <ProjectList
            projects={projects.data}
            isError={projects.isError}
            isLoading={projects.isLoading}
          />
        </main>
      </ContainerPage>
    </>
  )
}
