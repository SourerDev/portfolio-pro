import Head from 'next/head'
import { ContainerPage } from '~/components/container_page'

export default function CvPage() {
  return (
    <>
      <Head>
        <title>Sourer Dev | Cv</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerPage>cv</ContainerPage>
    </>
  )
}
