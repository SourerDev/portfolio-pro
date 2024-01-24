import Head from 'next/head'

import { ContainerPage } from '~/components/container_page'
import { LandingSection } from '~/components/sections/landing'
import { MainProjectsSection } from '~/components/sections/main_projects'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Yhonier Alegria | Developer</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/icon-ya.svg" />
      </Head>
      <ContainerPage className="overflow-hidden">
        <LandingSection />
        <MainProjectsSection />
      </ContainerPage>
    </>
  )
}
